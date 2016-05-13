'use strict';

/**
 * @ngdoc directive
 * @name angularspaApp.directive:ngkFocus
 * @description
 * # ngkFocus
 * Directive that assign the focus to a DOM element
 */
angular.module('angularspaApp')
  .directive('ngkFocus', function() {
    return {
      link: function postLink(scope, element, attrs, controller) {
        element.focus();
      }
    };
  });
