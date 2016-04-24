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
      this.userList.push(JSON.parse(JSON.stringify(userData)));
      //dataService.userList.push(JSON.parse(JSON.stringify(userData)));
      //ataService.save();
    };
    factoryObj.remove = function(index) {
      this.userList.splice(index, 1);
      //dataService.userList.plice(index, 1);
    };
    return factoryObj;
  }]);
