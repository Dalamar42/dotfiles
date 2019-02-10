function fish_user_key_bindings
    fish_vi_mode

    bind j backward-char
    bind k down-or-search
    bind i up-or-search
    bind l forward-char

    bind -M visual j backward-char
    bind -M visual l forward-char

    bind -m insert ' ' force-repaint

    # useful insert mode mappings
    bind -M insert \ch backward-delete-char
    bind -M insert \cw backward-kill-word
    bind -M insert \cu backward-kill-line
    bind -M insert \cp history-search-backward
    bind -M insert \cn history-search-forward
    bind -M insert \cb backward-word
    bind -M insert \cf forward-word
    bind -M insert \cx end-of-line
end

funcsave fish_user_key_bindings

