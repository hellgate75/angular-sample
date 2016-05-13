'use strict';

/**
 * @ngdoc controller
 * @name angularspaApp.controller:ngkUsersForm
 * @description
 * # ngkUsersForm
 * Transcluded component that inherits actions from the parent controller
 * the required actions are add (add new user from the userData object) and reset (reset data in the UserData object) and
 * it takes as input attribute the variable that the controller has defined as user data placeholder
 */

angular.module('angularspaApp')
  .component('ngkUsersForm', {
    templateUrl: 'templates/ngkusersform.html',
    transclude: true,
    bindings: {
      userData: '<'
    },
    controller: function($scope) {
      $scope.add = function() {
        $scope.$parent.add();
      };
      $scope.reset = function() {
        $scope.$parent.reset();
      };
      if (!angular.element('link#ngkusersform').length) {
        angular.element('head').append(
          '<link id="ngkusersform" href="styles/ngkusersform.css" rel="stylesheet">'
        );
      }
    }
  });
