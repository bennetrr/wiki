# Parsing arguments with Bash 

## Using argument variables

The name of the script is stored in `$0`.
The arguments passed to the script are stored in `$1`, `$2` etc.

## Using the arguments array

The arguments of the script are stored in an array called `$@`.
You can loop over them to check if the script was called with a certain argument.

## Using `getopt`

`getopt` is a command line argument parser that is installed by default on most Linux distributions.
It supports both long (`--arg1` and also `-arg1`) and short (`-a`) arguments, which can also receive values.

`getopt` supports the following arguments:
- `-a` / `--alternative` allows long options to start with a single dash (`-long-option`).
- `-n` / `--name` sets the name that appears in the message if an argument is invalid.
- `-o` / `--options` specifies the short options `getopt` should look for.
  Put one colon behind the option if the option should take a required argument.
  Put two colons behind the option if the option should take an optional argument.
- `-l` / `--longoptions` specifies the long options `getopt` should look for.
  Put one colon behind the option if the option should take a required argument.
  Put two colons behind the option if the option should take an optional argument.

Here is a simple example script:

```bash
#!/bin/bash
# Set some default values:
ALPHA=unset
BETA=unset
CHARLIE=unset
DELTA=unset

# Defining an usage function
usage()
{
  echo "Usage: alphabet [ -a | --alpha ] [ -b | --beta ]
                        [ -c | --charlie CHARLIE ] 
                        [ -d | --delta   DELTA   ] filename(s)"
  exit 2
}

# Calling getopt
PARSED_ARGUMENTS=$(getopt -a -n alphabet -o abc:d: -l alpha,bravo,charlie:,delta: -- "$@")  # -- "$@" gives getopt the arguments of the script

# Testing if any valid arguments are given
VALID_ARGUMENTS=$?
if [ "$VALID_ARGUMENTS" != "0" ]; then usage; fi

# Load the parsed arguments in the argument array
eval set -- "$PARSED_ARGUMENTS"

# Looping over the the arguments and removing the current (with shift)
while :
do
  case "$1" in
    -a | --alpha)   ALPHA=1      ; shift   ;;
    -b | --beta)    BETA=1       ; shift   ;;
    -c | --charlie) CHARLIE="$2" ; shift 2 ;;
    -d | --delta)   DELTA="$2"   ; shift 2 ;;
    --) shift; break ;;  # After the --, getopt puts the remaining arguments
    *) echo "Unexpected option: $1 - this should not happen."
       usage ;;
  esac
done

echo "ALPHA   : $ALPHA"
echo "BETA    : $BETA "
echo "CHARLIE : $CHARLIE"
echo "DELTA   : $DELTA"
echo "Parameters remaining are: $@"
```

## Sources

- [Bash Command Line Arguments | LinuxHint](https://linuxhint.com/command_line_arguments_bash_script/)
- [getopt | Shell Scripting Tips](https://www.shellscript.sh/tips/getopt/)