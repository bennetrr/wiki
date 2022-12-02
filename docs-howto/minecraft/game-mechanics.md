# Minecraft Game Mechanics

## Hoppers and Composters

A hopper first checks if there is a block with an inventory above it. If there isn't one, it checks if there are any
entities in the area above that have an inventory. Checking for entities is far more computing-intensive because
entities do not have to be exactly above the hopper.

When placing a block above the hopper that can have items taken out of, the hopper skips the laggier entity check.
Then the hopper checks for items in the block. It does that by iterating over every single pullable slot in the
container until it finds an item. This means, the more slots the container has, the more time the hopper needs to look
for items and so it creates more lags.

In previous versions, the furnace was used for this job, but the composter, which was added in 1.14, has a few
advantages. The composter also has only one slot, but unlike the furnace, it's completely passive and has no code that
is executed every game tick.

Source: [Why composters on top of hoppers are used to reduce lag | r/technicalminecraft](https://www.reddit.com/r/technicalminecraft/comments/g5907e/demo_why_composters_on_top_of_hoppers_are_used_to/)