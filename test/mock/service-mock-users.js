'use strict';

/**
 * @ngdoc service
 * @name angularspaMocks.UsersMock
 * @description
 * # UsersMock
 * Mocked service of angulaspaApp.Users service in the angularspaMocks module.
 */
angular.module('angularspaApp').factory('UsersMock', function() {

  // Public API here
  var factoryObj = {};
  factoryObj.lastId = 0;
  factoryObj.userList = [];
  factoryObj.list = function() {
    return this.userList;
  };
  factoryObj.reload = function() {};
  factoryObj.add = function(userData) {
    userData.id = ++this.lastId;
    this.userList.push(userData);
  };
  factoryObj.remove = function(id) {
    this.userList = this.userList.filter(function(
      userData) {
      return userData.id !== id;
    });
    this.lastId = 0;
    this.userList.forEach(function(
      userData) {
      if (userData.id > this.lastId) {
        this.lastId = userData.id;
      }
    }.bind(this));
  };
  return factoryObj;
});
/**
 * @ngdoc service
 * @name angularspaMocks.(runner)
 * @description
 * Mocked ajax service in the angularspaMocks module able to intercept users ajax calls and return mocked answers.
 */
/*
  .run(inject(function($httpBackend, jsonDataServiceMock) {
    var regexUsersById = /^.*\/users\/([0-9]+)$/;
    var regexUsers = /^.*\/users/;
    // ignore .html files from mock
    $httpBackend.whenGET(new RegExp('.html')).passThrough();

    $httpBackend.whenGET(regexUsers).respond(function() {
      return [200, JSON.stringify(jsonDataServiceMock.userList), {}];
    });
    $httpBackend.whenPOST(regexUsers).respond(function(postData) {
      var user = JSON.parse(postData);
      if (user)
        jsonDataServiceMock.save(user);
      return [200, [], {}];
    });
    $httpBackend.whenDELETE(regexUsersById).respond(function(method, url) {
      var id = parseInt(url.match(regexPersonId)[1]);
      if (id)
        jsonDataServiceMock.delete(id);
      return [200, [], {}];
    });
  }));
  */
