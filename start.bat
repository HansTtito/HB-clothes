@echo off
title HB Clothes - servidor local
cd /d "%~dp0"

where python >nul 2>nul
if %errorlevel%==0 (
    echo Iniciando servidor con Python en http://localhost:5500
    start "" "http://localhost:5500/index.html"
    python -m http.server 5500
    goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
    echo Iniciando servidor con Python (py) en http://localhost:5500
    start "" "http://localhost:5500/index.html"
    py -m http.server 5500
    goto :eof
)

where npx >nul 2>nul
if %errorlevel%==0 (
    echo Iniciando servidor con Node (http-server) en http://localhost:5500
    start "" "http://localhost:5500/index.html"
    npx --yes http-server -p 5500
    goto :eof
)

echo No se encontro Python ni Node en el sistema.
echo Instala Python (https://python.org) o Node (https://nodejs.org) y vuelve a ejecutar este archivo.
pause
