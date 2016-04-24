'use strict';

/**
 * @ngdoc function
 * @name angularspaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularspaApp
 */

angular.module('angularspaApp').controller(
  'MainCtrl', ['$scope', 'Users',
    function($scope, Users) {
      this.searchText = '';
      this.userData = {
        'name': '',
        'surname': '',
        'address': '',
        'mobile': '',
        'email': '',
      };
      this.reset = function() {
        this.userData.name = '';
        this.userData.surname = '';
        this.userData.address = '';
        this.userData.mobile = '';
        this.userData.email = '';
      };
      this.resetSearch = function() {
        this.searchText = '';
      };
      this.list = function() {
        return Users.userList;
      };
      this.add = function() {
        Users.add(JSON.parse(JSON.stringify(this.userData)));
        this.reset();
      };
      this.remove = function(index) {
        Users.remove(index);
      };
    }
  ]);
