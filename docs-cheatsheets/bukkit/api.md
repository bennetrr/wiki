# Bukkit API Tips & Tricks

## Creating a plugin

The [Minecraft Development Plugin](https://plugins.jetbrains.com/plugin/8327-minecraft-development) for IntelliJ has many templates for plugins and mods.

Plugin documentation: <https://mcdev.io/docs/create.html>

## Villager trades

```java
public class VillagerUtils {
    public static void clearTrades(Villager villager) {
        List<MerchantRecipe> newRecipes = new ArrayList<>();
        villager.setRecipes(newRecipes);
    }

    public static void addTrade(Villager villager, ItemStack buyItem1, @Nullable ItemStack buyItem2, ItemStack sellItem) {
        List<MerchantRecipe> oldRecipes = villager.getRecipes();

        MerchantRecipe newRecipe = new MerchantRecipe(sellItem, 999999999);
        newRecipe.addIngredient(buyItem1);
        if (buyItem2 != null) newRecipe.addIngredient(buyItem2);

        List<MerchantRecipe> newRecipes = new ArrayList<>(oldRecipes);
        newRecipes.add(newRecipe);
        villager.setRecipes(newRecipes);
    }

    public static void addTrade(Villager villager, ItemStack buyItem1, ItemStack sellItem) {
        addTrade(villager, buyItem1, null, sellItem);
    }
}
```

Source: [Adding custom trades to villagers | Spigot Forum](https://www.spigotmc.org/threads/adding-custom-trades-to-villagers.202265/)

## Potion effects

Add a potion effect to a player:

```java
player.addPotionEffect(new PotionEffect(PotionEffectType.FIRE_RESISTANCE, 200, 1));
```

Remove all potion effects from a player:
```java
player.getActivePotionEffects().stream().map(PotionEffect::getType).forEach(player::removePotionEffect);
```

Source: [Add potion effect | Bukkit Forum](https://bukkit.org/threads/add-potion-effect.62082/#post-985016)

## Killing a player

```java
player.setHealth(0.0D);
```

Source: [Plugin Tutorial | Bukkit Wiki](https://bukkit.fandom.com/wiki/Plugin_Tutorial_(Eclipse)#Killing_the_player)

## Tick actions

Put this in the `onEnable()` method

```java
getServer().getScheduler().scheduleSyncRepeatingTask(this, () -> {
    // ...
}, 1L, 1L);
```

Source: [Is there a ServerTickEvent? | Bukkit Forum](https://bukkit.org/threads/on-server-tick-event.131575/#post-1564247)

## Teams

Create a team:

```java
team = Bukkit.getScoreboardManager().getMainScoreboard().registerNewTeam("some_team");
```

Set the color, display name and prefix:

```java
team.color(NamedTextColor.RED);
team.displayName(Component.text("Some Team"));
team.prefix(Component.text("[Some Team] "));
```

Making invisible teammates have a transparent body:

```java
team.setCanSeeFriendlyInvisibles(true);
```

Add players from a list to the team:
```java
players.stream().map(HumanEntity::getName).forEach(team::addEntry);
```

Source: [Scoreboards / Teams with the Bukkit API | Bukkit Forum](https://bukkit.org/threads/tutorial-scoreboards-teams-with-the-bukkit-api.139655/)

## Play sounds to a player

```java
player.playSound(Sound.sound(Key.key("minecraft:block.sculk_sensor.clicking"), Sound.Source.MASTER, 0.5F, 1));
```

## Check if an entity is in a specific location

```java
public bool entityInArea(Entity entity, Location loc1, Location loc2) {
    Vector loc1Vector = new Vector(loc1.getX(), 0, loc1.getZ());
    Vector loc2Vector = new Vector(loc2.getX(), 0, loc2.getZ());
    Vector entityVector = new Vector(entity.getLocation().getX(), 0, entity.getLocation().getZ());
    return entityVector.isInAABB(startVector, endVector);
}
```

## Spawn an item

```java
world.spawn(location, Item.class, item -> item.setItemStack(new ItemStack(Material.EMERALD, 3)))
```

## Get the name of an item

```java
@Nullable
public static String getDisplayName(ItemStack itemStack) {
    if (itemStack == null) return null;
    if (!itemStack.hasItemMeta()) return null;
    ItemMeta itemMeta = itemStack.getItemMeta();
    if (!itemMeta.hasDisplayName()) return null;
    return PlainTextComponentSerializer.plainText().serialize(itemMeta.displayName());
}
```
