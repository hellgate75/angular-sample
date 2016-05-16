'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.jsonDataServiceProvider
 * @description
 * # jsonDataServiceProvider
 * Provider in the angularspaApp.
 */
angular.module('angularspaApp')
  .provider('jsonDataServiceProvider', function() {

    var jsonDataService;

    this.$set = function(s) {
      jsonDataService = s;
    };

    this.$get = ['jsonDataService', function(
      jsonDataService) {

      // let's assume that the UnicornLauncher constructor was also changed to
      // accept and use the useTinfoilShielding argument
      return jsonDataService;
    }];
  });
