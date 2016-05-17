'use strict';

describe('Service: Users', function() {

  // load the service's module
  beforeEach(module('angularspaApp'));
  // beforeEach(module('angularspaMocks'));
  // instantiate service
  var Users,
    serviceMock,
    injector;
  beforeEach(module('angularspaApp', function($provide) {
    $provide.factory('jsonDataService', function() {
      return serviceMock;
    });
  }));
  beforeEach(function() {
    if (!injector) {
      inject(function($injector) {
        injector = $injector;
      });
    }
    serviceMock = injector.get('jsonDataServiceMock');
    Users = injector.get('Users');
  });

  it('should be a list of empty elements initially to the factory',
    function() {
      expect(Users.list().length).toBe(0);
    });
  it('should be able to add a new user from the factory',
    function() {
      var userData = {
        "name": "John",
        "surname": "Smith",
        "address": "18A, O'Connel St., Dublin, D1",
        "mobile": "+8521544785",
        "email": "jonh.smit@aib.ie"
      };
      Users.add(userData);
      expect(Users.list().length).toBe(1);
    });
  it('should be able to remove user from the factory',
    function() {
      Users.remove(1);
      expect(Users.list().length).toBe(0);
    });
  it('should be able to list all user to the factory', function() {
    var userData1 = {
      "name": "John",
      "surname": "Smith",
      "address": "18A, O'Connel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "jonh.smit@aib.ie"
    };
    Users.add(userData1);
    var userData2 = {
      "name": "Mark",
      "surname": "O'Connel",
      "address": "22, Parnel St., Dublin, D1",
      "mobile": "+8521544785",
      "email": "mark.oconnel@yahoo.ie"
    };
    Users.add(userData2);
    expect(Users.list().length).toBe(2);
    expect(JSON.stringify(Users.list())).toBe(
      '[{"name":"John","surname":"Smith","address":"18A, O\'Connel St., Dublin, D1","mobile":"+8521544785","email":"jonh.smit@aib.ie","id":1},{"name":"Mark","surname":"O\'Connel","address":"22, Parnel St., Dublin, D1","mobile":"+8521544785","email":"mark.oconnel@yahoo.ie","id":2}]'
    );
    Users.remove(2);
    expect(Users.list().length).toBe(1);
    Users.remove(1);
    expect(Users.list().length).toBe(0);
  });
});
