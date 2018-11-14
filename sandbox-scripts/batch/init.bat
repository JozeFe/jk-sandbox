REM start links examples
start firefox https://www.google.com
call :waitForProc
start chrome https://www.google.com
start "" https://www.google.com

REM start programs examples
call :waitForProc
start C:\"totalcmd\TOTALCMD64.EXE"
call :waitForProc
start C:\"totalcmd\TOTALCMD64.EXE"

exit /b

:waitForProc
timeout 5
FOR /F "tokens=* USEBACKQ" %%F IN (`"wmic cpu get LoadPercentage  /value  |find "LoadPercentage""`) DO ( SET /a var1=%%F )
IF %var1% LSS 30 goto :eof
goto :waitForProc
