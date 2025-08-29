@echo off
REM One-click start for the optional proxy (Windows)
IF NOT EXIST package.json (
  npm init -y
)
npm i express node-fetch@2 cors
node proxy-server.js
pause
