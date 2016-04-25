if which gls > /dev/null
  function ll
    gls -l --color
  end
else
  function ll
    command ls -l --color=auto $argv
  end
end

funcsave ll
