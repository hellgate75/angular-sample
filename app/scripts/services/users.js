'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.Users
 * @description
 * # Users
 * Factory in the angularspaApp.
 */
angular.module('angularspaApp')
  .factory('Users', ['jsonDataService', function(dataService) {
    // private logic

    var privateUserList = [];

    // Public API here
    var factoryObj = {};
    factoryObj.userList = privateUserList;
    factoryObj.list = function() {
      return dataService.userList;
    };
    factoryObj.reload = function() {
      dataService.load();
    };
    factoryObj.add = function(userData) {
      dataService.save(JSON.parse(JSON.stringify(userData)));
    };
    factoryObj.remove = function(id) {
      dataService.delete(id);
    };
    return factoryObj;
  }]);
