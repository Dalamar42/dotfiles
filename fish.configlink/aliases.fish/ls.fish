if which gls > /dev/null
  function ls
    gls -F --color
  end
else
  function ls
    command ls --color=auto $argv
  end
end

funcsave ls
