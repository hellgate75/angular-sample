'use strict';

/**
 * @ngdoc controller
 * @name angularspaApp.controller:ngkLoadingAnimation
 * @description
 * # ngkUsersForm
 * Transcluded component that inherits actions from the parent controller
 * It represents the loading animation componnt ablr to interrupt the user experience since a controller
 * gets an answer from a remote system or makes heavy operations
 */

angular.module('angularspaApp')
  .component('ngkLoadingAnimation', {
    templateUrl: 'templates/ngkloadinganimation.html',
    bindings: {
      animationShowFlag: '<',
      animationText: '<',
      animationDoneText: '<',
      animationErrorText: '<',
      hideTimeout: '@'
    },
    transclude: true,
    controller: ['$scope', '$timeout', function($scope, $timeout) {
      if (!angular.element('link#ngkloadinganimation').length) {
        angular.element('head').append(
          '<link id="ngkloadinganimation" href="styles/ngkloadinganimation.css" rel="stylesheet">'
        );
      }
      $scope.animationFlag = 0;
      var hideLoadingPane = function() {
        $timeout(function() {
          $scope.animationFlag = 0;
          $scope.$ctrl.animationShowFlag = false;
        }, parseInt($scope.$ctrl.hideTimeout));
      };
      $scope.showAnimation = function() {
        return $scope.$ctrl.animationShowFlag;
      };
      $scope.animationMessage = function() {
        if ($scope.animationFlag === 1) {
          return $scope.$ctrl.animationDoneText;
        } else if ($scope.animationFlag === 2) {
          return $scope.$ctrl.animationErrorText;
        }
        return $scope.$ctrl.animationText;
      };
      $scope.animationState = function() {
        if ($scope.animationFlag === 1) {
          return 'done';
        } else if ($scope.animationFlag === 2) {
          return 'error';
        }
        return 'start';
      };
      $scope.$parent.startLoadingAnimation = function() {
        if (!$scope.$ctrl.animationShowFlag) {
          $scope.$ctrl.animationShowFlag = true;
        }
        $scope.animationFlag = 0;
      }.bind(this);
      $scope.$parent.showLoadingSuccess = function() {
        if (!$scope.$ctrl.animationShowFlag) {
          $scope.$ctrl.animationShowFlag = true;
        }
        $scope.animationFlag = 1;
        hideLoadingPane();
      };
      $scope.$parent.showLoadingError = function() {
        if (!$scope.$ctrl.animationShowFlag) {
          $scope.$ctrl.animationShowFlag = true;
        }
        $scope.animationFlag = 2;
        hideLoadingPane();
      };
    }]
  });
