with import ./nixpkgs.nix {
    config.allowUnfree = true;
};
let
  commonPkgs = [
    # Nix
    nix
    cacert
   
    # Dev
    tldr
    vim
    git
    tig
    vscode
   
    # Shell
    fish
    fzf
   
    # Web
    curl
    httpie
    jq
    wget
   
    # System
    htop
   
    # Utils
    zip
    unzip
   
    # Dotfiles
    stow

    # Fix for locales issue
    # https://github.com/NixOS/nix/issues/599
    glibcLocales
  ];
  linuxPkgs = [
    # Dev
    kcachegrind
  ];
  darwinPkgs = [];
in
  commonPkgs ++
  (lib.optionals stdenv.isLinux linuxPkgs) ++
  (lib.optionals stdenv.isDarwin darwinPkgs)

