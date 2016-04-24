'use strict';

/**
 * @ngdoc overview
 * @name angularspaApp
 * @description
 * # angularspaApp
 *
 * Main module of the application.
 */
// const low = require('lowdb');
// const storage = require('lowdb/file-sync');
//
// const db = low('users.json', {
//   storage
// });

angular
  .module('angularspaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMessages'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
