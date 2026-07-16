@echo off
cd /d "%~dp0backend"
if not exist node_modules (
    echo Instalando dependencias do backend...
    call npm install
)
echo Iniciando backend (json-server) na porta 3000...
call npm start
pause
