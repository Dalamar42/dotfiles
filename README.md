# dalamar42 does holman's dotfiles

## dotfiles

Your dotfiles are how you personalize your system. These are mine, forked from
Tom McAdam's, who forked them from Zach Holman's.

If you're interested in the philosophy behind why projects like these are
awesome, you might want to [read his post on the
subject](http://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/).

These dotfiles for use with the Fish shell.

## install

Run this:

```sh
git clone https://github.com/tfm/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
script/bootstrap
```

This will symlink the appropriate files in `.dotfiles` to your home directory.
Everything is configured and tweaked within `~/.dotfiles`.

The main file you'll want to change right off the bat is `fish/config.fish`,
which sets up a few paths that'll be different on your particular machine.

## what's inside

A lot of stuff. Seriously, a lot of stuff. Check them out in the file browser
above and see what components may mesh up with you.
[Fork it](https://github.com/dalamar42/dotfiles/fork), remove what you don't
use, and build on what you do use.

## components

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

## bugs

I want this to work for everyone; that means when you clone it down it should
work for you even though you may not have `rbenv` installed, for example. That
said, I do use this as *my* dotfiles, so there's a good chance I may break
something if I forget to make a check for a dependency.

If you're brand-new to the project and run into any blockers, please
[open an issue](https://github.com/dalamar42/dotfiles/issues) on this repository
and I'd love to get it fixed for you!

## thanks

Thanks to [Tom McAdam](https://github.com/tfm), then transitively 
to [Zach Holman](http://github.com/holman) and his thanks:

"I forked [Ryan Bates](http://github.com/ryanb)' excellent
[dotfiles](http://github.com/ryanb/dotfiles) for a couple years before the
weight of my changes and tweaks inspired me to finally roll my own. But Ryan's
dotfiles were an easy way to get into bash customization, and then to jump ship
to zsh a bit later. A decent amount of the code in these dotfiles stem or are
inspired from Ryan's original project."
