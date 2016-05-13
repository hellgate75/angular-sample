'use strict';

describe('Component: ngkUsersForm', function() {

  // load the directive's module
  beforeEach(module('angularspaApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<ngk-users-form></ngk-users-form>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the usersform directive');
  }));
});
