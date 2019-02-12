if which gls > /dev/null
  function ll
    gls -l --color $argv
  end
else
  function ll
    command ls -lh --color=auto $argv
  end
end

funcsave ll
