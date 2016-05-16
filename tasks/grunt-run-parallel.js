'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-run-grunt');

  grunt.registerMultiTask('run_parallel', 'run async grunt processes',
    function() {
      var myTask = require('grunt-run-grunt');
      var options = this.options();
      var done = this.async();

      setTimeout(function() {
        try {
          myTask(options);
          done();
        } catch (e) {
          // Use the grunt.fail API as you see fit.
          grunt.fail.fatal(e);
        }
      }, 500);
    });


};
