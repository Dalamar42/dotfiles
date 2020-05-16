#!/usr/bin/env sh

xmodmap -e 'clear lock' -e 'remove Lock = Caps_Lock' -e 'keysym Caps_Lock = Escape' -e 'keycode 0x42 = Escape'

