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

You also should install [7-zip](https://www.7-zip.org/download.html), so that `pb_tool` is able to package your plugin.
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

- Class name, plugin name and module name should be the same but in different formats:
  The class name should be in `CamelCase`, the plugin name can contain spaces and the module name is `lowercase_with_underscores`.
- Although the tooltip of the version number says that it accepts semver (`1.0.0`), you have to enter a decimal number.
- The additional components don't have tooltips, but the options are described in the documentation:
    - Internationalization: Scripts for translating your plugin
    - Unit tests: A basic set of unit tests
    - Helper scripts: Helper scripts for publishing to the QGIS plugin repository
    - Makefile: Makefile for building the plugin (not needed because we're using `pb_tool`)
    - pb_tool: Configuration for `pb_tool`

After you generated the base plugin, start the OSGeo4W PyCharm and open the folder that was created by the `Plugin Builder`.

Make sure to select the Python interpreter that comes with QGIS (it starts with `C:\OSGeo4W\`).

## Deploying

To test the plugin, you have to compile and copy the files into the QGIS plugin directory.
To do this, just run the command `pb_tool deploy`.
After that, you should be able to enable the plugin in QGIS.
After making changes and deploying them, you can reload the plugin using the `Plugin Reloader` (you first need to set your plugin in the configuration menu).

If you create new files that should be included in the plugin, you need to add them into the `pb_tool.cfg`.

The `*.ui` files can be opened with the QT Designer that was installed along QGIS.
You can also open the `resources.qrc` file with the ressource browser of the designer.

## Resources

- [Official PyQGIS Cookbook](https://docs.qgis.org/3.22/en/docs/pyqgis_developer_cookbook/index.html)
- [PyQGIS API Docs](https://qgis.org/pyqgis/3.22/)
- [`pb_tool` Usage](https://github.com/g-sherman/plugin_build_tool#usage)

Source: [Quick guide to getting started with PyQGIS3 on Windows | Spatial Galaxy](https://spatialgalaxy.net/2018/02/13/quick-guide-to-getting-started-with-pyqgis-3-on-windows/)
