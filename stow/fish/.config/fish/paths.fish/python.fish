# Ensure we are not already in a virtualenv
if functions -q vf
    vf deactivate > /dev/null
end

if test (command -v pip3)
    if test (pip3 list --format=freeze | grep virtualfish)
        eval (python3 -m virtualfish auto_activation global_requirements projects)
    end
end
