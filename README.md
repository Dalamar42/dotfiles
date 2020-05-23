# Dotfiles

## Summary

Your dotfiles are how you personalize your system. These are mine, forked from
Tom McAdam's, who forked them from Zach Holman's.

If you're interested in the philosophy behind why projects like these are
awesome, you might want to [read his post on the
subject](http://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/).

These dotfiles for use with the Fish shell.

## Install
This is the process to follow when setting up a brand new system.

### Prerequisites
- Install [stow]
- Install [nix]
- Install `git`

### Dotfiles
```sh
git clone https://github.com/Dalamar42/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
script/bootstrap
```

This will symlink the appropriate files in `.dotfiles` to your home directory.
Everything is configured and tweaked within `~/.dotfiles`.

The main file you'll want to change right off the bat is `fish/config.fish`,
which sets up a few paths that'll be different on your particular machine
and `stow/i3/.config/i3/config`, `stow/i3/.config/i3/screenlayout.sh`which
have sections that depend on your monitor arrangement.

### Nix
Install software with

```sh
nix/bin/nox -i
```

This will also install [fish].

### Switching to fish
Set `fish` as the default shell by following the instructions in [fish-default].
If you installed `fish` via `nix` in the previous step `fish` will not be in
`/usr/local/bin/fish`. Use `which fish` to find the correct path.

### Install i3
- Install [i3]
- Install [rofi] application launcher
- Install [i3blocks] status bar

## Components

There's a few special files in the hierarchy.

- **bin/**: Anything in `bin/` will get added to your `$PATH`
- **nix/**: This contains the nix configuration.
- **nix/bin**: Anything in the nix `bin/` will get added to your `$PATH`
- **stow/**: This contains the files that will be symlinked to `$HOME`
- **stow/fish/.config/fish/aliases.fish**: The files here are expected to
  setup aliases
- **stow/fish/.config/fish/paths.fish**: The files here are expected to add
  entries to `$PATH`
- **install/**: Contains various topical installation scripts

## Thanks

Thanks to [Tom McAdam](https://github.com/tfm), then transitively 
to [Zach Holman](http://github.com/holman) and his thanks:

"I forked [Ryan Bates](http://github.com/ryanb)' excellent
[dotfiles](http://github.com/ryanb/dotfiles) for a couple years before the
weight of my changes and tweaks inspired me to finally roll my own. But Ryan's
dotfiles were an easy way to get into bash customization, and then to jump ship
to zsh a bit later. A decent amount of the code in these dotfiles stem or are
inspired from Ryan's original project."

[stow]: https://www.gnu.org/software/stow/
[nix]: https://nixos.org/nix/
[fish]: https://fishshell.com/
[fish-default]: https://fishshell.com/docs/current/index.html#default-shell
[i3]: https://i3wm.org/
[rofi]: https://github.com/davatorium/rofi
[i3blocks]: https://github.com/vivien/i3blocks
