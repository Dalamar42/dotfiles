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

# add the i3 bin dir to path
set -x PATH $PATH $DOTFILES/stow/i3/.config/i3/bin

# fix for https://github.com/NixOS/nix/issues/599
set -gx LOCALE_ARCHIVE (nix-env --installed --no-name --out-path --query glibc-locales)/lib/locale/locale-archive

# set greeting message
set fish_greeting ""

if type -q direnv
  eval (direnv hook fish)
end

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
