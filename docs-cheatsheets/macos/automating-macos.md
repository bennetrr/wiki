# Automating MacOS

## Add applications to Dock

```bash
function add_to_dock() {
    defaults write com.apple.dock persistent-apps -array-add "<dict><key>tile-data</key><dict><key>file-data</key><dict><key>_CFURLString</key><string>/Applications/$1.app</string><key>_CFURLStringType</key><integer>0</integer></dict></dict></dict>"
    killall Dock
}
```

To add `Visual Studio Code.app` to the end of the Dock, call `add_to_dock Visual Studio Code`.

Source: <https://apple.stackexchange.com/a/255665>

## Add applications to login items

```bash
function add_to_login_items() {
    osascript -e "tell application \"System Events\" to make login item at end with properties {path:\"/Applications/$1.app\", hidden:false}"
}
```

To open `Visual Studio Code.app` at login, call `add_to_dock Visual Studio Code`.

Source: https://apple.stackexchange.com/a/230201