if which gls > /dev/null
  function ls
    gls -F --color $argv
  end
else
  function ls
    command ls --color=auto $argv
  end
end

funcsave ls
