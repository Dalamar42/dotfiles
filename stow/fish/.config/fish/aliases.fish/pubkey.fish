function pubkey
  # Pipe my public key to my clipboard.
  more ~/.ssh/id_rsa.pub | pbcopy | echo '=> Public key copied to pasteboard.'
end

funcsave pubkey
