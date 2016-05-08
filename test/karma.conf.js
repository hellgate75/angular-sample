// Karma configuration
// Generated on 2016-04-19

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine',
      'mocha',
      'chai-sinon'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/requirejs/require.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8085,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-html-reporter',
      'karma-coverage',
      'karma-mocha',
      'karma-chai-sinon'
    ],
    reporters: ['progress', 'html', 'junit', 'coverage'],
    junitReporter: {
      outputDir: 'build/tests/junit-report',
      outputFile: undefined,
      suite: '',
      useBrowserName: true,
      // outputDir: '', // results will be saved as $outputDir/$browserName.xml
      // outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
      // suite: '', // suite will become the package name attribute in xml testsuite element
      // useBrowserName: true, // add browser name to report and classes names
      // nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      // classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element,
      // properties: {} // key value pair of properties to add to the <properties> section of the report

    },
    htmlReporter: {
      outputDir: 'build/tests/karma-html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: 'AngularSPA Unit Test Results', // page title for reports; browser info by default
      urlFriendlyName: true, // simply replaces spaces with _ for files/dirs
      reportName: 'unit-test', // report summary filename; browser info by default
      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js': 'coverage'
    },
    coverageReporter: {
      dir: 'build/tests/coverage/',
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      },
      reporters: [
        // reporters not supporting the `file` property
        {
          type: 'html',
          subdir: 'report-html'
        }, {
          type: 'lcov',
          subdir: 'report-lcov'
        },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.txt'
        }, {
          type: 'lcovonly',
          subdir: '.',
          file: 'report-lcovonly.txt'
        }, {
          type: 'teamcity',
          subdir: '.',
          file: 'teamcity.txt'
        }, {
          type: 'text',
          subdir: '.',
          file: 'text.txt'
        }, {
          type: 'text-summary',
          subdir: '.',
          file: 'text-summary.txt'
        },
      ]
    },
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    urlRoot: '_karma_'
  });
};
