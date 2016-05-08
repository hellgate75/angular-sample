'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngkUsersTable
 * @description
 * # ngkUsersTable
 */
angular.module('angularspaApp')
  .directive('ngkUsersTable', ['$interval', '$log', function($interval, $log) {
    return {
      templateUrl: 'templates/ngkuserstable.html',
      restrict: 'E',
      transclude: true,
      scope: {
        usersList: '=users',
        resetSearchFnc: '&onReset',
        deleteUserFnc: '&onDelete',
        reloadUsersFnc: '&onReload',
      },
      link: function postLink(scope, element, attrs) {
        var timeoutId;
        var updateUsersTable = function() {
          $log.info('reloading users list from service now ...');
          scope.reloadUsersFnc();
        };
        scope.$watch(attrs.users, function() {
          updateUsersTable(); // update the DOM table
        });
        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });
        timeoutId = $interval(function() {
          updateUsersTable(); // update the DOM table
        }, 5000);
      }
    };
  }]);
