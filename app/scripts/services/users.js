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
angular.module('angularspaApp').config(['$provide', function($provide) {
  $provide.factory('Users', ['jsonDataService', function(dataService) {
    // private logic

    var privateUserList = [];

    // Public API here
    var factoryObj = {};
    factoryObj.userList = privateUserList;
    factoryObj.list = function() {
      return dataService.userList;
    };
    factoryObj.reload = function($scope) {
      dataService.load($scope);
    };
    factoryObj.add = function(userData, $scope) {
      dataService.save(JSON.parse(JSON.stringify(userData)),
        $scope);
    };
    factoryObj.remove = function(id, $scope) {
      dataService.delete(id, $scope);
    };
    return factoryObj;
  }]);
}]);
