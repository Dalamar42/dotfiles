if which gls > /dev/null
  function la
    gls -lAh --color $argv
  end
else
  function la
    command ls -lAh --color=auto $argv
  end
end

funcsave la
