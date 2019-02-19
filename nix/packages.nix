with import ./nixpkgs.nix {};
let
  commonPkgs = [
    # Nix
    nix
    cacert
   
    # Dev
    tldr
    rustup
    vim
    git
   
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

