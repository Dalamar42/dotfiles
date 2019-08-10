#!/bin/sh
xrandr --dpi 120 \
    --output HDMI-3 --off \
    --output HDMI-2 --off \
    --output HDMI-1 --mode 2560x1440 --pos -1440x175 --rotate left \
    --output DP-3 --off \
    --output DP-2 --mode 2560x1440 --pos 2560x0 --rotate right \
    --output DP-1 --primary --mode 2560x1440 --pos 0x592 --rotate normal

