'use strict';

//var module = angular.module('angularspaApp')
/**
 * @ngdoc service
 * @name angularspaMocks.jsonDataServiceMock
 * @description
 * # jsonDataServiceMock
 * Mocked service of angulaspaApp.jsonDataService in the angularspaMocks module.
 */
/*
  .factory('jsonDataServiceMock', function() {
    var factory = {};
    factory.userList = [];
    factory.lastId = 0;
    factory.load = function() {};
    factory.save = function(userData) {
      this.saving = true;
      userData.id = (++this.lastId);
      this.userList.push(userData);
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
      var user = this.findLocallyById(userId);
      if (user && !!user.id) {
        this.userList = this.userList.filter(
          function(
            userData) {
            return userData.id !== userId;
          });
      } else if (user) {
        var index = this.userList.indexOf(user);
        if (!!index)
          delete this.userList[index];
      }
    };
    return factory;
  })
  */
/**
 * @ngdoc service
 * @name angularspaMocks.UsersMock
 * @description
 * # UsersMock
 * Mocked service of angulaspaApp.Users service in the angularspaMocks module.
 */
/*
  .factory('UsersMock', ['jsonDataServiceMock', function(dataService) {
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
  }])
  */
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
