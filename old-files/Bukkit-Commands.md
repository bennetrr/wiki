1. Add the dependencies to `gradle.build`

```
repositories {
   mavenCentral()
}

dependencies {
   implementation 'cloud.commandframework:cloud-paper:1.6.2'
   implementation 'cloud.commandframework:cloud-annotations:1.6.2'
   implementation 'cloud.commandframework:cloud-minecraft-extras:1.6.2'
}
```

For the latest versions, see [Getting Started | Cloud Wiki](https://github.com/Incendo/cloud/blob/master/docs/README.adoc#getting-started=)

2. Declare and initiate the variables for the CommandManager and the AnnotationParser in your main plugin class

```java
public class ExamplePlugin extends JavaPlugin {
    // ...
    private BukkitCommandManager<CommandSender> manager;
    private AnnotationParser<CommandSender> annotationParser;

    @Override
    public onEnable() {
        // Get the execution coordinator
        final Function<CommandTree<CommandSender>, CommandExecutionCoordinator<CommandSender>> executionCoordinatorFunction = CommandExecutionCoordinator.simpleCoordinator();

        // Get the command manager
        try {
            this.manager = new PaperCommandManager<>(this, executionCoordinatorFunction, Function.identity(), Function.identity());
        } catch (Exception e) {
            getServer().getLogger().info("Failed to initialize the command manager");
            getServer().getLogger().info("Disabling...");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }

        // Register Brigadier mappings
        if (this.manager.queryCapability(CloudBukkitCapabilities.BRIGADIER)) {
            this.manager.registerBrigadier();
        }

        // Register asynchronous completions
        if (this.manager.queryCapability(CloudBukkitCapabilities.ASYNCHRONOUS_COMPLETION)) {
            ((PaperCommandManager<CommandSender>) this.manager).registerAsynchronousCompletions();
        }

        // Create the annotation parser
        final Function<ParserParameters, CommandMeta> commandMetaFunction = p -> CommandMeta.simple().with(CommandMeta.DESCRIPTION, p.get(StandardParameters.DESCRIPTION, "No description")).build();
        this.annotationParser = new AnnotationParser<>(this.manager, CommandSender.class, commandMetaFunction);


        // Parse all @CommandMethod-annotated methods
        this.annotationParser.parse(this);
        // ...
    }
} 
```

3. Create methods in your main plugin class that should be commands and decorate them with the `@CommandMethod`
   annotation

```java
public class ExamplePlugin extends JavaPlugin {
    // ...
    @CommandMethod("example dosomething <arg1> <arg2>")
    @CommandDescription("A description of the command")
    private void exampleDoSomethingCommand(CommandSender sender, @Argument("arg1") @Range(min = "0", max = "20") int arg1, @Argument("arg2") String arg2) {
        // Do something
    }
}
```

### Sources and more information:

- [Cloud Wiki](https://github.com/Incendo/cloud/tree/master/docs)
- [Cloud example mod](https://github.com/Incendo/cloud/tree/master/examples/example-bukkit/src/main/java/cloud/commandframework/examples/bukkit)