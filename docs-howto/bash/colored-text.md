When you print something to the console, for example with `echo` or `printf`,
you can use escape codes to color the output.

All sequences start with `\033[`, then followed by a number (see table below) and at the end a `m`.

Example:

```bash
printf "Now this becomes \033[31mRED\033[0m."
```

| Sequence | Effect             |
|----------|--------------------|
| \033[0m  | Reset all          |
| \033[1m  | **Bold**           |
| \033[4m  | Underline          |
| \033[5m  | Flash              |
| \033[7m  | Inverted           |
| \033[30m | Color black        |
| \033[31m | Color red          |
| \033[32m | Color green        |
| \033[33m | Color yellow       |
| \033[34m | Color blue         |
| \033[35m | Color magenta      |
| \033[36m | Color cyan         |
| \033[37m | Color white        |
| \033[40m | Background black   |
| \033[41m | Background red     |
| \033[42m | Background green   |
| \033[43m | Background yellow  |
| \033[44m | Background blue    |
| \033[45m | Background magenta |
| \033[46m | Background cyan    |
| \033[47m | Background white   |

Source: [Farbige Ausgabe auf der Konsole | CheckMK Linux-Wissen](https://checkmk.com/de/linux-wissen/farbige-ausgabe-auf-der-konsole) (DEU)