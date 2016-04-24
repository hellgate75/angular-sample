@echo off
npm install -g grunt yo grunt-cli bower
npm install -g generator-angular
npm install --save-dev
bower install --save
rem To have the stand-alone server install the binaries of the json server
rem npm install -g json-server
npm install json-server grunt-json-server --save-dev
npm install lowdb --save--dev
npm update graceful-fs --save-dev
