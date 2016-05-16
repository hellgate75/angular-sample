'use strict';

//var module = angular.module('angularspaApp')
/**
 * @ngdoc service
 * @name angularspaMocks.jsonDataServiceMock
 * @description
 * # jsonDataServiceMock
 * Mocked service of angulaspaApp.jsonDataService in the angularspaMocks module.
 */
angular.module('angularspaApp').factory('jsonDataServiceMock', function() {
  var factory = {};
  factory.userList = [];
  factory.lastId = 0;
  factory.load = function() {
    alert('Mocked Load ...');
  };
  factory.save = function(userData) {
    this.saving = true;
    userData.id = (++this.lastId);
    this.userList.push(JSON.parse(JSON.stringify(userData)));
    this.saving = false;
  };
  factory.saveAll = function() {
    this.saving = true;
    this.userList.forEach(function(user) {
      if (!user.id) {
        user.id = (++this.lastId);
        this.userList.push(user);
      } else {

      }
    }.bind(this));
    this.saving = false;
  };
  factory.findLocallyById = function(userId) {
    var elements = this.userList.filter(function(userData) {
      return userData.id === userId;
    });
    if (elements.length > 0) {
      return elements[0];
    }
    return null;
  };
  factory.delete = function(id) {
    var user = this.findLocallyById(id);
    if (user && !!user.id) {
      this.userList = this.userList.filter(
        function(
          userData) {
          return userData.id !== id;
        });
    } else if (user) {
      var index = this.userList.indexOf(user);
      if (!!index)
        delete this.userList[index];
    }
    this.lastId = 0;
    this.userList.forEach(function(
      userData) {
      if (userData.id > this.lastId) {
        this.lastId = userData.id;
      }
    }.bind(this));
  };
  return factory;
});
