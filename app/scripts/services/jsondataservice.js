'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.jsonDataService
 * @description
 * # jsonDataService
 * Service in the angularspaApp.
 */
angular.module('angularspaApp').factory('jsonDataService', function($http) {
  var factory = {};
  factory.$http = $http;
  factory.userList = [];
  factory.lastId = 0;
  factory.url = 'http://localhost:9995/users';
  factory.load = function() {
    this.$http.get(this.url).success(function(data) {
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
            if (userData.mobile[0] !== '0' && userData.mobile.length) {
              userData.mobile = '+' + userData.mobile;
            }
          }
        }.bind(this));
      }
    }.bind(this)).error(function() {
      this.userList = [];
      console.log('Error loading the json list ...');
    }.bind(this));
  };
  factory.save = function(userData) {
    this.saving = true;
    if (!userData.id) {
      userData.id = (++this.lastId);
      var req1 = {
        method: 'POST',
        url: this.url,
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
          console.log('Saving user ' + JSON.stringify(userData) +
            ' successful!!');
        }.bind(this)).error(function() {
        //this.userList = [];
        console.log('Error saving user ' + JSON.stringify(userData) +
          ' ...');
      }.bind(this));
    } else {
      var req2 = {
        method: 'PUT',
        url: this.url + '/' + userData.id,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(userData)
      };
      this.$http(req2).success(
        function() {
          //this.userList = data.users;
          console.log('Updating user ' + JSON.stringify(userData) +
            ' successful!!');
        }.bind(this)).error(function() {
        //this.userList = [];
        console.log('Error updating user ' + JSON.stringify(
          userData) + ' ...');
      }.bind(this));
    }
    this.saving = false;
  };
  factory.saveAll = function() {
    this.saving = true;
    this.userList.forEach(function(user) {
      if (!user.id) {
        user.id = (++this.lastId);
        var req1 = {
          method: 'POST',
          url: this.url,
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
            console.log('Saving user ' + JSON.stringify(user) +
              ' successful!!');
          }.bind(this)).error(function() {
          //this.userList = [];
          console.log('Error saving user ' + JSON.stringify(user) +
            ' ...');
        }.bind(this));
      } else {
        var req2 = {
          method: 'PUT',
          url: this.url + '/' + user.id,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(user)
        };
        this.$http(req2).success(
          function() {
            //this.userList = data.users;
            console.log('Updating user ' + JSON.stringify(user) +
              ' successful!!');
          }.bind(this)).error(function() {
          //this.userList = [];
          console.log('Error updating user ' + JSON.stringify(
            user) + ' ...');
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
  factory.delete = function(userId) {
    var user = this.findLocallyById(userId);
    if (user && !!user.id) {
      // var req3 = {
      //   method: 'DELETE',
      //   url: this.url + '/' + user.id,
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   data: JSON.stringify(user)
      // };
      this.$http.delete(this.url + '/' + user.id).success(
        function() {
          this.userList = this.userList.filter(function(
            userData) {
            return userData.id !== userId;
          });
          this.load();
          console.log('Deleting user ' + JSON.stringify(user) +
            ' successful!!');
        }.bind(this)).error(function() {
        //this.userList = [];
        console.log('Error deleting user ' + JSON.stringify(
          user) + ' ...');
      }.bind(this));
    } else if (user) {
      var index = this.userList.indexOf(user);
      if (!!index) {
        delete this.userList[index];
      }
    }
  };
  factory.load();
  return factory;
});
