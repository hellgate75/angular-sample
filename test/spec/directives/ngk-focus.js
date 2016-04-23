'use strict';

describe('Directive: ngkFocus', function() {

  // load the directive's module
  beforeEach(module('angularspaApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element(
      '<input ngk-focus value="sdada"></input>'
    );
    element = $compile(element)(scope);
    //expect(element.is(':active')).toBe(true);
  }));
});
