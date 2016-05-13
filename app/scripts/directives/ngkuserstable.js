'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngkUsersTable
 * @description
 * # ngkUsersTable
 * This directive is a transcluded directive that show a table of users and inherit from the parent controller some functions :
 * list : list of users to visualize
 * remove : function to remove a user by user id
 * This directive provide a local filter to search in the user list behalf the parent controller  features.
 * The scope is isolated.
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
      link: function postLink(scope, element, attrs) {
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
