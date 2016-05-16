'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.jsonDataService
 * @description
 * # jsonDataService
 * Service that provides the communication with the JSONServer instance and expose the following behaviours :
 * load : load the JSON user's list from the server
 * save : add or upddate a user JSON to the server
 * saveAll : add or update all users JSON to the server
 * delete : remove a users JSON to the server
 * No error handling yet implemented.
 */
angular.module('angularspaApp').config(['$provide', function($provide) {
  $provide.factory('jsonDataService', function($http) {
    var factory = {};
    factory.$http = $http;
    factory.userList = [];
    factory.lastId = 0;
    factory.jsonServerConfig = jsonServiceConfigData;
    // factory.protocol = 'http';
    // factory.hostname = 'localhost';
    // factory.port = 9995;
    // factory.jsonService = 'users';
    factory.url = function() {
      return this.jsonServerConfig.protocol + '://' +
        this.jsonServerConfig.hostname + (
          this.jsonServerConfig.port ? ":" +
          this.jsonServerConfig.port : '') + '/' + this.jsonServerConfig
        .jsonService;
    };
    factory.load = function($scope) {
      alert("Loading from URL : " + this.url());
      this.$scope = $scope;
      this.$http.get(this.url()).success(function(data) {
        this.userList = data;
        if (!this.userList.length) {
          this.lastId = 0;
        } else {
          this.userList.forEach(function(userData) {
            if (userData.id > this.lastId) {
              this.lastId = userData.id;
            }
            if (userData.mobile) {
              userData.mobile = '' + userData.mobile;
              if (userData.mobile[0] !== '0' && userData.mobile
                .length) {
                userData.mobile = '+' + userData.mobile;
              }
            }
          }.bind(this));
        }
      }.bind(this)).error(function() {
        this.userList = [];
        this.logError('Error loading the json list ...');
        if (this.$scope && typeof this.$scope.showLoadingError ===
          'function') {
          this.$scope.showLoadingError();
        }
      }.bind(this));
    };
    factory.logError = function(message) {
      //TODO: introduce the error handling to advice the UI
      alert(message);
    };
    factory.logSuccess = function(messages) {
      //TODO: introduce the success handling to advice the UI
      alert(message);
    };
    factory.save = function(userData, $scope) {
      this.saving = true;
      this.$scope = $scope;
      $scope.startLoadingAnimation();
      if (!userData.id) {
        userData.id = (++this.lastId);
        var req1 = {
          method: 'POST',
          url: this.url(),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(userData)
        };
        this.$http(req1).success(
          function() {
            //this.userList = data.users;
            this.userList.push(userData);
            this.load();
            this.logSuccess('Saving user ' + JSON.stringify(
                userData) +
              ' successful!!');
            this.$scope.showLoadingSuccess();
          }.bind(this)).error(function() {
          //this.userList = [];
          this.logError('Error saving user ' + JSON.stringify(
              userData) +
            ' ...');
          this.$scope.showLoadingError();
        }.bind(this));
      } else {
        var req2 = {
          method: 'PUT',
          url: this.url() + '/' + userData.id,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(userData)
        };
        this.$http(req2).success(
          function() {
            //this.userList = data.users;
            this.logSuccess('Updating user ' + JSON.stringify(
                userData) +
              ' successful!!');
            this.$scope.showLoadingSuccess();
          }.bind(this)).error(function() {
          //this.userList = [];
          this.logError('Error updating user ' + JSON.stringify(
            userData) + ' ...');
          this.$scope.showLoadingError();
        }.bind(this));
      }
      this.saving = false;
    };
    factory.saveAll = function($scope) {
      this.saving = true;
      this.$scope = $scope;
      $scope.startLoadingAnimation();
      this.userList.forEach(function(user) {
        if (!user.id) {
          user.id = (++this.lastId);
          var req1 = {
            method: 'POST',
            url: this.url(),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(user)
          };
          this.$http(req1).success(
            function() {
              //this.userList = data.users;
              this.userList.push(user);
              this.logSuccess('Saving user ' + JSON.stringify(
                  user) +
                ' successful!!');
              this.$scope.showLoadingSuccess();
            }.bind(this)).error(function() {
            //this.userList = [];
            this.logError('Error saving user ' + JSON.stringify(
                user) +
              ' ...');
            this.$scope.showLoadingError();
          }.bind(this));
        } else {
          var req2 = {
            method: 'PUT',
            url: this.url() + '/' + user.id,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(user)
          };
          this.$http(req2).success(
            function() {
              //this.userList = data.users;
              this.logSuccess('Updating user ' + JSON.stringify(
                  user) +
                ' successful!!');
              this.$scope.showLoadingSuccess();
            }.bind(this)).error(function() {
            //this.userList = [];
            this.logError('Error updating user ' + JSON.stringify(
              user) + ' ...');
            this.$scope.showLoadingError();
          }.bind(this));
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
    factory.delete = function(userId, $scope) {
      var user = this.findLocallyById(userId);
      this.$scope = $scope;
      $scope.startLoadingAnimation();
      if (user && !!user.id) {
        this.$http.delete(this.url() + '/' + user.id).success(
          function() {
            this.userList = this.userList.filter(function(
              userData) {
              return userData.id !== userId;
            });
            this.load();
            this.logSuccess('Deleting user ' + JSON.stringify(
                user) +
              ' successful!!');
            this.$scope.showLoadingSuccess();
          }.bind(this)).error(function() {
          this.logError('Error deleting user ' + JSON.stringify(
            user) + ' ...');
          this.$scope.showLoadingError();
        }.bind(this));
      } else if (user) {
        var index = this.userList.indexOf(user);
        if (!!index) {
          delete this.userList[index];
        }
      }
    };
    return factory;
  });
}]);
