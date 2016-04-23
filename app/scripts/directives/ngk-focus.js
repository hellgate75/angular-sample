'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngkFocus
 * @description
 * # ngkFocus
 */
angular.module('angularspaApp')
  .directive('ngkFocus', function() {
    return {
      link: function postLink(scope, element, attrs, controller) {
        element.focus();
      }
    };
  });
