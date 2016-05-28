if test (command -v python3) -a (pip3 list | grep virtualfish)
    eval (python3 -m virtualfish)

    if test -z (vf ls | grep -E '^venv3$')
        vf new venv3
    end
    vf activate venv3
end
