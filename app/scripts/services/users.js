'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.Users
 * @description
 * # Users
 * Factory service wrapper for the jsonDataService service, exposing the following behaviours :
 * list, reload, add/update, remove users into or from the JSON Server
 * No error handling yet implemented.
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
