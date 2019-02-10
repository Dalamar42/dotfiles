# Defined in /Users/thomas/.dotfiles/fish.configlink/aliases.fish/pubkey.fish @ line 1
function pubkey
	
  more ~/.ssh/id_rsa.pub | pbcopy | echo '=> Public key copied to pasteboard.'
end
