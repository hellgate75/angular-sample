'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngkUsersTable
 * @description
 * # ngkUsersTable
 */
angular.module('angularspaApp')
  .directive('ngkUsersTable', ['$interval', '$log', function(
    $interval, $log) {
    return {
      templateUrl: 'templates/ngkuserstable.html',
      restrict: 'E',
      transclude: true,
      scope: {
        usersList: '=users',
        reloadTimeout: '=timeout',
      },
      link: function postLink(scope, element, attrs, controller) {
        var timeoutId;
        scope.list = function() {
          return scope.$parent.list();
        };
        scope.removeUser = function(userId) {
          scope.$parent.remove(userId);
        };
        scope.resetUserSearch = function() {
          scope.searchText = '';
        };
        var reloadUsersTable = function() {
          $log.info('reloading users list from service now ...');
          scope.$parent.reload();
        };
        var updateUsersTable = function() {
          $log.info('updating the table now ...');
        };
        scope.$watch(attrs.users, function() {
          updateUsersTable(); // update the DOM table
        });
        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });
        timeoutId = $interval(function() {
          reloadUsersTable(); // reload the user table
        }, parseInt(scope.reloadTimeout));
      }
    };
  }]);
