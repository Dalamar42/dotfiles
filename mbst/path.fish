if test -d ~/dev/opt/
  for opt in `ls -d ~/dev/opt/*/bin`
    set -x PATH $PATH $opt
  end
end
set -x PATH $PATH ~/dev/infra/bin
