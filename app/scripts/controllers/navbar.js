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
  'NavBarCtrl', ['$scope',
    function($scope) {
      $scope.aboutClass = '';
      $scope.mainClass = 'active';
      $scope.contactsClass = '';
      $scope.switchToMain = function() {
        $scope.aboutClass = '';
        $scope.mainClass = 'active';
        $window.scrollTo(0, 0);
      };
      $scope.switchToAbout = function() {
        $scope.aboutClass = 'active';
        $scope.mainClass = '';
        $window.scrollTo(0, 0);
      };
    }
  ]);
