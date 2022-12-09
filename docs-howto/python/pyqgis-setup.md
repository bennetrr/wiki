# PyQGIS Development Environment Setup

This article helps to set up the development environment for building QGIS Python plugins.

:::note
These instructions only work for Windows (yet)!
:::

## 1. Install / update QGIS

An up-to-date QGIS installation is required for the setup.
It's also important to use the `OSGeo4W Network Installer` and not the standalone installer, because we need extra
packages and `OSGeo4W` can also update your QGIS installation.
So if you have installed QGIS via the standalone installer, you should remove it and do the installation that is described below.

If you already have QGIS installed using `OSGeo4W`, make sure the installation up-to-date.
To do this, you can run the installer again using the script `C:\OSGeo4W\bin\setup.bat`.

You can download the `OSGeo4W Network Installer` here: https://qgis.org/en/site/forusers/alldownloads.html#osgeo4w-installer.

Then do the following steps:

- Run the installer as administrator
- On the first page select `Advanced Install`
- On the next page select `Install from Internet`
- On the next page set `C:\OSGeo4W` as Root Directory
- Select the first download mirror (`http://download.osgeo.org/`)
- From the `Select Packages` page, select
  - `Desktop -> qgis: QGIS Desktop`
  - `Libs -> qt5-devel`
- Accept the additional packages that are listed on the next page

During the installation you can continue with the steps 2 and 3 of this article.
For the steps after that, the installation must be completed.

## 2. Install 7-Zip

You should also install 7-Zip if you haven't, because it's required for `pb_tool` to work. You can download it
from the [official download page](https://www.7-zip.org/download.html).

## 3. Set up the OSGeo environment

We need to write a small script that adds all the QGIS directories to the `PATH`. This script loads the QGIS tools and
also tells Python where to find the QGIS modules.

```bat
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

Save the script as `C:\OSGeo4W\shell.cmd`. Now you can run the script to get your "QGIS shell". You can also create a
new profile in the Windows Terminal that uses the script as shell.

## 4. Install `pb_tool`

`pb_tool` is a CLI tool that helps with compiling, deploying and testing your plugin. You can install it by
doing `pip install pb_tool`.

To check if `pb_tool` is working, open the `QGIS shell` and run `pb_tool version`.

## 5. Set up PyCharm

You can use any IDE or even a text editor for developing QGIS plugins. For me (and for the most people)
, [PyCharm](https://www.jetbrains.com/pycharm/) is the IDE of our choice. In this tutorial we will use PyCharm, if you
use another IDE / text editor, make sure to change the commands in the file below.

You need to tell PyCharm where to find the QGIS python libraries. To do this, you need another script. It's similar to
the script above, but now it calls PyCharm instead of the command prompt.

I installed PyCharm using the JetBrains toolbox and checked the option to create scripts for each IDE. The created
script for PyCharm is called in the script below. You have to change the path to a file with which PyCharm can be run.

```bat
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

Save the script as `C:\OSGeo4W\pycharm.cmd`. When you run this script, PyCharm will be opened. We don't want to create
project with PyCharm, because there is a QGIS plugin for it.

## 6. Set up QGIS

There are a few helpful plugins that you should install:

- `First Aid` - This plugin provides a debugger for plugins
- `Plugin Builder 3` - This plugin creates QGIS plugin templates where you can fill in your code
- `Plugin Reloader` - This plugin lets you reload your plugin so that you don't have to restart QGIS after making
  changes

It's also a good idea to open the message dock. Here is a screenshot of my QGIS setup:

![Screenshot of QGIS](https://github.com/bennetrr/bennetrr/wiki/img/qgis_setup.png)

## 7. Create a new plugin

Click on the `Plugin Builder` icon in the toolbar (it looks like a hammer). A form will open, where you have to fill
information like the plugins name, description, and version.

The tooltips explain the most options. Here are some additional notes:

- The class name, plugin name and module name should be the same, but the class name should be in CamelCase, the plugin
  name can contain spaces, and the module name in lowercase_with_underscores (see the python naming conventions).
- Although the tooltip for the version number says that the version number should be in the SemVer format (1.0.0), you
  have to enter a number (like 1.0).
- At the step where you have to select additional components, the tooltips are missing, but the documentation says for
  what the components are used.
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