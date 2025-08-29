#!/usr/bin/env bash
set -e
npm init -y
npm i express node-fetch@2 cors
node proxy-server.js
