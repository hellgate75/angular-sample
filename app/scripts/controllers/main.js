'use strict';

/**
 * @ngdoc function
 * @name angularspaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller that provide the user interface the main features exposer by the Users controller. It provide in the scope
 * functions and variable used by other elements : directives and components.
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
      $scope.userData = {
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
      $scope.reset = function() {
        $scope.userData.id = 0;
        $scope.userData.name = '';
        $scope.userData.surname = '';
        $scope.userData.address = '';
        $scope.userData.mobile = '';
        $scope.userData.email = '';
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
        $scope.userData = data;
      };
      this.showMessages = function() {
        return $scope.messageActivation.savedMessage || $scope.messageActivation
          .removedMessage || $scope.messageActivation.errorMessage;
      };
      $scope.add = function() {
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
