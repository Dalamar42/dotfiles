if which gls > /dev/null
  function la
    gls -lAh --color
  end
else
  function la
    command ls -lAh --color=auto $argv
  end
end

funcsave la
