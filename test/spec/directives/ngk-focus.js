'use strict';

describe('Directive: ngkFocus', function() {

  // load the directive's module
  beforeEach(module('angularspaApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element(
      '<input ngk-focus value="sdada"></input>'
    );
    angular.element(document.body).append(element);
    element = $compile(element)(scope);
  }));

  it('should make hidden element visible', function() {
    var currElement = document.activeElement;
    expect(element[0]).toBe(currElement);
  });
});
