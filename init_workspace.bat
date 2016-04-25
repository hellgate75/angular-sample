@echo off
npm install grunt-run-grunt --save-dev
npm install -g grunt yo grunt-cli bower
npm install -g generator-angular
npm install
bower install
rem To have the stand-alone server install the binaries of the json server
rem npm install -g json-server
npm install json-server grunt-json-server --save-dev
npm install lowdb --save--dev
npm update graceful-fs --save-dev
npm update --save-dev
