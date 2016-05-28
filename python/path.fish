# Ensure we are not already in a virtualenv
if functions -q vf
    vf deactivate > /dev/null
end

if test (command -v python3) -a (pip3 list | grep virtualfish)
    eval (python3 -m virtualfish auto_activation global_requirements projects)
end
