# shortcut to this dotfiles path is $DOTFILES
set -x DOTFILES $HOME/.dotfiles

# your project folder
set -x PROJECTS ~/dev

# editor
set -x EDITOR vim

# add the dotfiles bin dir to path
set -x PATH $PATH $DOTFILES/bin

# add the nix bin dir to path
set -x PATH $PATH $DOTFILES/nix/bin

# set greeting message
set fish_greeting ""

# use .localrc for SUPER SECRET CRAP that you don't
# want in your public, versioned repo.
if test -f ~/.localrc
  source ~/.localrc
end

# load the path files
for file in ~/.config/fish/paths.fish/*.fish
  source $file
end

# load aliases
for file in ~/.config/fish/aliases.fish/*.fish
  source $file
end
