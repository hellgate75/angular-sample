'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('angularspaApp'));

  var MainCtrl,
    scope,
    mockedUsers,
    sandbox;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));
  // Initialize and destroy moked objects and the sinon sandbox
  beforeEach(function() {
    //sandbox = sinon.sandbox.create();
  });
  afterEach(function() {
    //sandbox.reset();
  });

  it('should attach a list of empty elements initially to the scope',
    function() {
      expect(MainCtrl.list().length).toBe(0);
    });
  it('should be able to add a new user from the scope', function() {
    MainCtrl.userData = {
      "name": "John",
      "surname": "Smith",
      "address": "18A, O'Connel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "jonh.smit@aib.ie"
    };
    MainCtrl.add();
    expect(MainCtrl.list().length).toBe(1);
  });
  it('should be able to remove a new user from the scope', function() {
    MainCtrl.userData = {
      "name": "John",
      "surname": "Smith",
      "address": "18A, O'Connel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "jonh.smit@aib.ie"
    };
    MainCtrl.add();
    expect(MainCtrl.list().length).toBe(1);
    MainCtrl.remove(0);
    expect(MainCtrl.list().length).toBe(0);
  });
  it('should be able to list all user to the scope', function() {
    MainCtrl.userData = {
      "name": "John",
      "surname": "Smith",
      "address": "18A, O'Connel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "jonh.smit@aib.ie"
    };
    MainCtrl.add();
    MainCtrl.userData = {
      "name": "Mark",
      "surname": "O'Connel",
      "address": "22, Parnel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "mark.oconnel@yahoo.ie"
    };
    MainCtrl.add();
    expect(MainCtrl.list().length).toBe(2);
    expect(JSON.stringify(MainCtrl.list())).toBe(
      "[{\"name\":\"John\",\"surname\":\"Smith\",\"address\":\"18A, O'Connel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\":\"jonh.smit@aib.ie\"},{\"name\":\"Mark\",\"surname\":\"O'Connel\",\"address\":\"22, Parnel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\":\"mark.oconnel@yahoo.ie\"}]"
    );
  });
});
