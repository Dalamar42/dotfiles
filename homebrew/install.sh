#!/usr/bin/env bash

# Homebrew
#
# This installs some of the common dependencies needed (or at least desired)
# using Homebrew.

set -e

if [ "$(uname -s)" != 'Darwin' ]; then
    echo 'Not on OS X. Skipping homebrew installation...'
    exit 0
fi

# Check for Homebrew
if test ! $(which brew)
then
  echo "  Installing Homebrew for you."
  ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)" > /tmp/homebrew-install.log
fi

brew update

brew upgrade --cleanup

# Install homebrew packages
brew install grc coreutils spark || true

# Install useful tools
brew install httpie z jq gnupg2 unrar python3 || true

# Install the fish shell
brew install fish || true
grep -q "/usr/local/bin/fish" "/etc/shells" || echo "/usr/local/bin/fish" >> "/etc/shells"
if [ "$SHELL" != '/usr/local/bin/fish' ]; then
    chsh -s /usr/local/bin/fish
fi

echo ""

exit 0
