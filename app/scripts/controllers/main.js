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
      $scope.searchText = '';
      $scope.messageActivation = {
        'savedMessage': false,
        'removedMessage': false,
        'errorMessage': false
      };
      $scope.messageActivationFlags = [false, false, false];
      this.userData = {
        'id': 0,
        'name': '',
        'surname': '',
        'address': '',
        'mobile': '',
        'email': '',
      };
      $scope.updateFlags = function(activation) {
        if (activation) {
          $scope.messageActivation = activation;
        }
        var current = [];
        angular.forEach($scope.messageActivation,
          function(value) {
            this.push(value);
          }, current);
        if (!angular.equals($scope.messageActivationFlags, current)) {
          $scope.messageActivationFlags = current;
        }
      };
      this.reset = function() {
        this.userData.id = 0;
        this.userData.name = '';
        this.userData.surname = '';
        this.userData.address = '';
        this.userData.mobile = '';
        this.userData.email = '';
      };
      $scope.resetSearch = this.resetSearch = function() {
        $scope.searchText = '';
      };
      $scope.list = this.list = function() {
        return Users.list();
      };
      $scope.reload = this.reload = function() {
        Users.reload();
      };
      this.setData = function(data) {
        this.userData = data;
      };
      this.showMessages = function() {
        return $scope.messageActivation.savedMessage || $scope.messageActivation
          .removedMessage || $scope.messageActivation.errorMessage;
      };
      this.add = function() {
        Users.add(JSON.parse(JSON.stringify(this.userData)));
        this.reset();
        $scope.messageActivation.savedMessage = true;
        $scope.updateFlags();
      };
      $scope.remove = this.remove = function(index) {
        Users.remove(index);
        $scope.messageActivation.removedMessage = true;
        $scope.updateFlags();
      };
    }
  ]);
