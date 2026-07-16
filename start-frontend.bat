@echo off
cd /d "%~dp0frontend"
if not exist node_modules (
    echo Instalando dependencias do frontend...
    call npm install
)
echo Iniciando frontend (Angular) na porta 4200...
call npm start
pause
