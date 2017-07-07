function fish_user_key_bindings
    fish_vi_mode

    bind j backward-char
    bind k down-or-search
    bind i up-or-search
    bind l forward-char

    bind -M visual j backward-char
    bind -M visual l forward-char

    bind -m insert ' ' force-repaint
end

funcsave fish_user_key_bindings

