'use strict';

describe('Service: UsersProvider', function() {

  // instantiate service
  var UsersProvider,
    init = function() {
      inject(function(_UsersProvider_) {
        UsersProvider = _UsersProvider_;
      });
    };

  // load the service's module
  beforeEach(module('angularspaApp'));

  it('should exists the provider', function() {
    init();

    expect(!!UsersProvider).toBe(true);
  });

  // it('should be configurable', function () {
  //   module(function (UsersProviderProvider) {
  //     UsersProviderProvider.setSalutation('Lorem ipsum');
  //   });
  //
  //   init();
  //
  //   expect(UsersProvider.greet()).toEqual('Lorem ipsum');
  // });

});
