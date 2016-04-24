'use strict';

describe('Filter: userFilter', function() {

  // load the filter's module
  beforeEach(module('angularspaApp'));

  // initialize a new instance of the filter before each test
  var bySurnameAndName;
  beforeEach(inject(function($filter) {
    bySurnameAndName = $filter('bySurnameAndName');
  }));

  it('should return the input prefixed with "userFilter filter:"', function() {
    //var text = 'angularjs';
    //expect(bySurnameAndName(text)).toBe('userFilter filter: ' + text);
  });

});
