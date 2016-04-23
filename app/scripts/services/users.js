'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.Users
 * @description
 * # Users
 * Factory in the angularspaApp.
 */
angular.module('angularspaApp')
  .factory('Users', function() {
    // private logic

    var privateUserList = [];

    // Public API here
    var factoryObj = {};
    factoryObj.userList = privateUserList;
    factoryObj.add = function(userData) {
      this.userList.push(JSON.parse(JSON.stringify(userData)));
    };
    factoryObj.remove = function(index) {
      this.userList.splice(index, 1);
    };

    return factoryObj;
  });
