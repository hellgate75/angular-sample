'use strict';

describe('Service: jsonDataServiceProvider', function() {

  // instantiate service
  var jsonDataServiceProvider,
    init = function() {
      inject(function(_jsonDataServiceProvider_) {
        jsonDataServiceProvider = _jsonDataServiceProvider_;
      });
    };

  // load the service's module
  beforeEach(module('angularspaApp'));

  it('should exists the provider', function() {
    init();

    expect(!!jsonDataServiceProvider).toBe(true);
  });

  // it('should be configurable', function () {
  //   module(function (jsonDataServiceProviderProvider) {
  //     jsonDataServiceProviderProvider.setSalutation('Lorem ipsum');
  //   });
  //
  //   init();
  //
  //   expect(jsonDataServiceProvider.greet()).toEqual('Lorem ipsum');
  // });

});
