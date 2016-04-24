'use strict';

describe('Service: jsonDataService', function () {

  // load the service's module
  beforeEach(module('angularspaApp'));

  // instantiate service
  var jsonDataService;
  beforeEach(inject(function (_jsonDataService_) {
    jsonDataService = _jsonDataService_;
  }));

  it('should do something', function () {
    expect(!!jsonDataService).toBe(true);
  });

});
