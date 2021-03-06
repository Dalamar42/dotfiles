let
  sources = import ./sources.nix;
  niv = (import sources.niv {}).niv;
  nixpkgs = import sources.nixpkgs {
    config.allowUnfree = true;
  };
  commonPkgs = with nixpkgs; [
    # Nix
    niv
    nix
    cacert
   
    # Dev
    tldr
    vim
    git
    tig
    vscode
    fd
    ripgrep
    bat
    hyperfine
    exa
    tokei
   
    # Shell
    fish
    fzf
    direnv
    starship
   
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
  ];
  linuxPkgs = with nixpkgs; [
    # Dev
    kcachegrind

    # Fix for locales issue
    # https://github.com/NixOS/nix/issues/599
    glibcLocales
  ];
  darwinPkgs = [];
in
  with nixpkgs;
  commonPkgs ++
  (lib.optionals stdenv.isLinux linuxPkgs) ++
  (lib.optionals stdenv.isDarwin darwinPkgs)
