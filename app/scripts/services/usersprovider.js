'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.UsersProvider
 * @description
 * # UsersProvider
 * Provider in the angularspaApp.
 */
angular.module('angularspaApp')
  .provider('UsersProvider', function() {
    var Users;

    this.$set = function(s) {
      Users = s;
    };

    this.$get = ['Users', function(
      Users) {

      // let's assume that the UnicornLauncher constructor was also changed to
      // accept and use the useTinfoilShielding argument
      return Users;
    }];
  });
