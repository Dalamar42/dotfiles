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

# setup the env variables that nix requires
if test -f ~/.nix-profile/etc/profile.d/nix.sh
    eval (bash -c "source ~/.nix-profile/etc/profile.d/nix.sh; echo export NIX_PATH=\"\$NIX_PATH\"; echo export PATH=\"\$PATH\"; echo export NIX_SSL_CERT_FILE=\"\$NIX_SSL_CERT_FILE\"")
end

# add the i3 bin dir to path
switch (uname)
    case Linux
        set -x PATH $PATH $DOTFILES/stow/i3/.config/i3/bin
end

# fix for https://github.com/NixOS/nix/issues/599
switch (uname)
    case Linux
        set -gx LOCALE_ARCHIVE (nix-env --installed --no-name --out-path --query glibc-locales)/lib/locale/locale-archive
end

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

# Use the starship prompt
starship init fish | source
