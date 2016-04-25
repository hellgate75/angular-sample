// Generated on 2016-04-19 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });
  grunt.loadNpmTasks('grunt-json-server');
  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    name: require('./bower.json').name || 'angularspa',
    dist: 'build/' + (require('./bower.json').name || 'angularspa'),
    base: 'build'
  };
  var jsCfg = grunt.file.readJSON('json-server.json');

  // Define the configuration for all the tasks
  grunt.initConfig({
    // Project settings
    appConfig: appConfig,
    jsonserverConfig: jsCfg,

    json_server: {
      options: {
        port: '<%= jsonserverConfig.port %>',
        hostname: '<%= jsonserverConfig.hostname %>',
        db: '<%= jsonserverConfig.database %>',
        keepAlive: true,
        logger: true
      },
      watch: {
        port: '<%= jsonserverConfig.port %>',
        hostname: '<%= jsonserverConfig.hostname %>',
        db: '<%= jsonserverConfig.database %>',
        keepAlive: true,
        logger: true
      }
    }
  });


  grunt.registerTask('serve', 'Start JSON Server', function() {

    var done = this.async();

    grunt.log.writeln(
      '\n===========================================\nStarting JSON Server...\n===========================================\n'
    );

    var init = function() {
      grunt.task.run('json_server');
      done();
    };

    init();
    grunt.log.writeln(
      '\n===========================================\ JSON Server Stopped ...\n===========================================\n'
    );

  });


  grunt.registerTask('default', [
    'json_server'
  ]);
};
