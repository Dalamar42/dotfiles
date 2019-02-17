let
  json = builtins.fromJSON (builtins.readFile ./nixpkgs.json);
  pinnedNixpkgsPath =
    builtins.fetchGit {
      inherit (json) url rev;
    };
in
  import pinnedNixpkgsPath
