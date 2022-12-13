# Setup for developing PyQGIS plugins

This article helps to set up the development environment for building QGIS Python plugins.

:::note
These instructions only work for Windows (yet)!
:::

## Prerequisites

It's important that you have an up-to-date QGIS installation that was created with the [`OSGeo4W Network Installer`](https://qgis.org/en/site/forusers/alldownloads.html#osgeo4w-installer).
If you already installed QGIS with the standalone installer, remove it and install QGIS again using `OSGeo4W`.
If you already installed QGIS with `OSGeo4W`, it's best to update the installation by running the installer again (which can be started by the script `C:\OSGeo4W\bin\setup.bat`).

During the installation process make sure to set these parameters right:
- The root directory has to be `C:\OSGeo4W`
- You need to select the following packages:
  - `Desktop -> qgis: QGIS Desktop`
  - `Libs -> qt5-devel`

You also should install [7-zip](https://www.7-zip.org/download.html), so that `pb_tool` is able to build QGIS plugin packages.
Make sure the installation directory is `C:\Program Files\7-Zip`.

## OSGeo4W Environment Shell

Next you need a script that adds the QGIS directories to the PATH variable, so you can use QGIS tools and Python libraries.
Save the script below as `C:\OSGeo4W\shell.cmd`.

```batch title="C:\OSGeo4W\shell.cmd"
@echo off
SET OSGEO4W_ROOT=C:\OSGeo4W
call "%OSGEO4W_ROOT%"\bin\o4w_env.bat
call "%OSGEO4W_ROOT%"\apps\grass\grass78\etc\env.bat

@echo off
path %PATH%;%OSGEO4W_ROOT%\apps\qgis\bin
path %PATH%;%OSGEO4W_ROOT%\apps\grass\grass-7.4.0\lib
path %PATH%;C:\OSGeo4W\apps\Qt5\bin
path %PATH%;C:\OSGeo4W\apps\Python39\Scripts
path %PATH%;C:\Program Files\7-Zip

set PYTHONPATH=%PYTHONPATH%;%OSGEO4W_ROOT%\apps\qgis\python
set PYTHONHOME=%OSGEO4W_ROOT%\apps\Python39

cmd
```

You can also add this script as a profile in Windows Terminal for easier access.

To test if everything works, run the script and execute `pip -V`.
The output should contain a path that starts with `C:\OSGwo4W\`.

## `pb_tool`

`pb_tool` is a CLI tool that helps with compiling, deploying and testing your plugin.

To install it, open the OSGeo4W Shell and run `pip install pb_tool`.
You can check the installation with `pb_tool version`.

## PyCharm

This article is written for [PyCharm](https://www.jetbrains.com/pycharm/), but you can use any other Python IDE (or even a text editor) for developing your plugins.

The script below is basically the same as the one that starts the OSGeo4W Shell, but it starts your IDE instead of `cmd`.

Save the script to `C:\OSGeo4W\pycharm.cmd` (or the name of your IDE).
Make sure to change the path to the executable of your IDE installation.

```batch
@echo off
SET OSGEO4W_ROOT=C:\OSGeo4W
call "%OSGEO4W_ROOT%"\bin\o4w_env.bat
call "%OSGEO4W_ROOT%"\apps\grass\grass78\etc\env.bat

@echo off
path %PATH%;%OSGEO4W_ROOT%\apps\qgis\bin
path %PATH%;%OSGEO4W_ROOT%\apps\grass\grass-7.4.0\lib
path %PATH%;C:\OSGeo4W\apps\Qt5\bin
path %PATH%;C:\OSGeo4W\apps\Python39\Scripts
path %PATH%;C:\Program Files\7-Zip

set PYTHONPATH=%PYTHONPATH%;%OSGEO4W_ROOT%\apps\qgis\python
set PYTHONHOME=%OSGEO4W_ROOT%\apps\Python39

C:\Users\benne\AppData\Local\JetBrains\ToolboxScripts\pycharm.cmd
```

## QGIS

There are a few helpful plugins that you should install:

- `First Aid` - Provides a debugger for your code inside QGIS
- `Plugin Builder 3` - Creates QGIS plugin projects
- `Plugin Reloader` - Lets you reload your plugin so that you don't have to restart QGIS after making changes

It's also a good idea to open the message dock. Here is a screenshot of my QGIS setup:

![Screenshot of QGIS](/img/qgis_setup.png)

## Create a new plugin

The `Plugin Builder` icon found in the toolbar opens a form where you have to fill in information like plugin name, description and version.
The tooltips explain the most options. Here are some additional notes:

- The class name, plugin name and module name should be the same, but the class name should be in CamelCase, the plugin
  name can contain spaces, and the module name in lowercase_with_underscores (see the python naming conventions).
- Although the tooltip for the version number says that the version number should be in the SemVer format (1.0.0), you
  have to enter a number (like 1.0).
- The additional components don't have tooltips, but the options are described in the documentation:
    - Internationalization: Scripts for translating your plugin
    - Unit tests: A basic set of unit tests
    - Helper scripts: Helper scripts for publishing to the QGIS plugin repository
    - Makefile: Makefile for building the plugin with GNU make
    - pb_tool: Configuration for `pb_tool`
- You don't need the Makefile because we will use `pb_tool`

After clicking the `Generate` button, open PyCharm with the script we created earlier and open the created folder in
PyCharm.

## 8. Write your own code

Now it's time to write your own code. Here are some notes.

There are many files and folders that belong to the plugin. The following are the most important:

```tree
.
│   icon.png                      # The icon that is used for the plugin manager and menu items
│   metadata.txt                  # Plugin information (that what you entered in the Plugin Builder form)
│   pb_tool.cfg                   # Configuration for pb_tool
│   resources.qrc                 # Resources for the plugin UI
│   module_name.py                # The main plugin file where you can add your code
│   module_name_dialog_base.ui    # The main QT dialog
│   __init__.py                   # The entrypoint for QGIS
│           
├───help
│   └───source                    # The source code for your help
│           
├───i18n                          # Language files
│       
└───test                          # Unit tests
```

If you create new python files, UI files, or any other files and folders, that should be included in the plugin, you
have to add them into the `pb_tool.cfg` file.

To translate your plugin to a language, you have to create a file in the `i18n` folder. The name should be the ISO
language code (like `de` or `en`) plus `.ts`. You can copy the format from the `af.ts` file. You also have to add the
ISO language code to the `pb_tool.cfg` file.

You can open the `module_name_dialog_base.ui` file with the QT Designer shipped with QGIS and edit the UI. You can also
open the `resources.qrc` file there using the resource browser in the right bottom corner.

## 9. Deploy your plugin to QGIS

In order to test your plugin, you can copy the plugin files to the QGIS plugins folder. `pb_tool` has a function to do
this: `pb_tool deploy`. The command compiles all files and makes them available for QGIS.

After running this command, start QGIS and open the `Plugin Manager`. You should see your plugin in the list. Enable it.

After making changes to your plugin, you can deploy it again. Normally you would have to restart QGIS, but
the `Plugin Reloader` tool that we installed earlier can apply the changes without restarting QGIS. First, you have to
select which plugin you want to reload. You can do this in the configuration menu of `Plugin Reloader`.

### Source:
[Quick guide to getting started with PyQGIS3 on Windows | Spatial Galaxy](https://spatialgalaxy.net/2018/02/13/quick-guide-to-getting-started-with-pyqgis-3-on-windows/)