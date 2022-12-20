# Using the WorldEdit API on Bukkit

For adding the dependencies into your project, see [API Usage | FAWE Wiki](https://github.com/IntellectualSites/FastAsyncWorldEdit-Documentation/wiki/API-Usage#gradle---fawe-bukkit-and-core=)

## Convert a Bukkit `Location` to a WorldEdit `BlockVector3`

This function is used in the examples below.

```java
public static BlockVector3 location2BlockVector3(Location loc) {
    return BukkitAdapter.adapt(loc).toVector().toBlockPoint();
}
```

## Fill an area with a material

```java
public static void fill(Location loc1, Location loc2, Material mat) {
    World world = BukkitAdapter.adapt(loc1.getWorld());
    
    // Select the region
    Region selection = new CuboidRegion(world, location2BlockVector3(loc1), location2BlockVector3(loc2));
    
    // Create a BlockState with air
    BlockState blockState = BukkitAdapter.adapt(mat.createBlockData());
    
    // This EditSession will be closed after the setBlocks command is finished
    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {
        editSession.setBlocks(selection, blockState);
    }
}
```

## Copy a region to another location

```java
public static void copy(Location startLoc, Location endLoc, Location pasteLoc) {
    World world = BukkitAdapter.adapt(startLoc.getWorld());

    // Select the region to copy
    CuboidRegion copyRegion = new CuboidRegion(world, location2BlockVector3(startLoc), location2BlockVector3(endLoc));
    BlockArrayClipboard clipboard = new BlockArrayClipboard(copyRegion);


    // This EditSessions will be closed after the copy and paste command is finished
    // Copy
    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {
        ForwardExtentCopy copyOperation = new ForwardExtentCopy(editSession, copyRegion, clipboard,copyRegion.getMinimumPoint());
        // You can specify settings here
        Operations.complete(copyOperation);
    }

    // Paste
    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {
        Operation pasteOperation = new ClipboardHolder(clipboard).createPaste(editSession).to(location2BlockVector3(pasteLoc)).build();
        // You can specify settings here
        Operations.complete(pasteOperation);
    }
}
```

## Sources
- https://worldedit.enginehub.org/en/latest/api/