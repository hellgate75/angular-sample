'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module

  beforeEach(module('angularspaApp'));
  // beforeEach(module('angularspaMocks'));
  // beforeEach(module('sinon'));
  var MainCtrl,
    UserCtrl,
    scope;
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    scope.startLoadingAnimation = function() {};
    scope.showLoadingError = function() {};
    scope.showLoadingSuccess = function() {};
    inject(function($injector) {
      UserCtrl = $injector.get('UsersMock');
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        Users: UserCtrl
      });
    });
  }));
  it('should attach a list of empty elements initially to the scope',
    function() {
      expect(MainCtrl.list().length).toBe(0);
    });
  it('should be able to add a new user from the scope', function() {
    MainCtrl.setData({
      name: "John",
      surname: "Smith",
      address: "18A, O'Connel St., Dublin, D1",
      mobile: "+8521544785",
      email: "jonh.smit@aib.ie"
    });
    MainCtrl.add();
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(1);
  });
  it('should be able to remove a user from the scope', function() {
    MainCtrl.setData({
      name: "John",
      surname: "Smith",
      address: "18A, O'Connel St., Dublin, D1",
      mobile: "+8521544785",
      email: "jonh.smit@aib.ie"
    });
    MainCtrl.remove(1);
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(0);
  });
  it('should be able to remove a new user from the scope', function() {
    MainCtrl.setData({
      name: "John",
      surname: "Smith",
      address: "18A, O'Connel St., Dublin, D1",
      mobile: "+8521544785",
      email: "jonh.smit@aib.ie"
    });
    MainCtrl.add();
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(1);
    MainCtrl.remove(1);
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(0);
  });
  it('should be able to list all user to the scope', function() {
    MainCtrl.setData({
      name: "John",
      surname: "Smith",
      address: "18A, O'Connel St., Dublin, D1",
      mobile: "+8521544785",
      email: "jonh.smit@aib.ie"
    });
    MainCtrl.add();
    MainCtrl.setData({
      name: "Mark",
      surname: "O'Connel",
      address: "22, Parnel St., Dublin, D1",
      mobile: "+8521544785",
      email: "mark.oconnel@yahoo.ie"
    });
    MainCtrl.add();
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(2);
    expect(JSON.stringify(MainCtrl.list())).toBe(
      '[{"name":"John","surname":"Smith","address":"18A, O\'Connel St., Dublin, D1","mobile":"+8521544785","email":"jonh.smit@aib.ie","id":1},{"name":"Mark","surname":"O\'Connel","address":"22, Parnel St., Dublin, D1","mobile":"+8521544785","email":"mark.oconnel@yahoo.ie","id":2}]'
    );
    MainCtrl.remove(2);
    MainCtrl.remove(1);
    MainCtrl.reload();
    expect(MainCtrl.list().length).toBe(0);
  });
});
