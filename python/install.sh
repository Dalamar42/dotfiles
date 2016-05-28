#!/bin/sh

if test $(command -v python3) -a $(command -v pip3)
then
    echo "  Installing virtualfish."
    pip3 install virtualfish
fi
