- `BlockBreakEvent`, `BlockPlaceEvent`: Called when a player breaks / places a block
- `EntityExplodeEvent`: Called when an entity (tnt, fireball, creeper) explodes
- `PrepareItemCraftEvent`: Called when a player interacts with the crafting menu<br>
  The event can be used for a crafting protection:

```java
public class CraftingProtection implements Listener {
    @EventHandler(priority = EventPriority.LOWEST)
    public void onCrafting(PrepareItemCraftEvent event) {
        if (event.getInventory().getResult() != null) {
            event.getInventory().setResult(new ItemStack(Material.AIR));
            event.getViewers().forEach(player -> player.sendMessage(Component.text("You're not allowed to craft any items!").color(NamedTextColor.RED)));
        }
    }
} 
```

- `PlayerDeathEvent`: Called when a player dies
- `PlayerRespawnEvent`: Called when a player respawns
- `PlayerInteractEvent`: Called when a player tries to interact with something<br>
  You can use this to launch a fireball when the player right-clicks with a fire charge

```java

@EventHandler
public class Fireball implements Listener {
    public void onFireballShoot(PlayerInteractEvent event) {
        Player player = event.getPlayer();
        PlayerInventory inventory = player.getInventory();
        ItemStack itemStack = inventory.getItemInMainHand();

        if (itemStack.getType() == Material.FIRE_CHARGE) {
            player.launchProjectile(Fireball.class);
            if (itemStack.getAmount() <= 0) inventory.setItemInMainHand(null);
            else {
                itemStack.setAmount(itemStack.getAmount() - 1);
                inventory.setItemInMainHand(itemStack);
            }
        }
    }
}
```

- `PlayerJoinEvent`: Called when a player joins the server
- `InventoryCloseEvent`: Called when a player closes an inventory<br>
  Can be used to process items that a player bought by a villager:

```java
public class TradeHandler implements Listener {
    @EventHandler(priority = EventPriority.LOWEST)
    public void onVillagerGUIClose(InventoryCloseEvent event) {
        // If the GUI is not a villager GUI, quit
        if (!(event.getInventory() instanceof MerchantInventory)) return;

        // Check if the sender is a player
        if (!(event.getPlayer() instanceof Player player)) return;
    }
}
```