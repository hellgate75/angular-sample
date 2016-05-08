'use strict';

describe('Service: Users', function() {

  // load the service's module
  beforeEach(module('angularspaApp'));
  // beforeEach(module('angularspaMocks'));
  // instantiate service
  var users;
  beforeEach(inject(function(_Users_) {
    users = _Users_;
  }));

  /*
    it('should be a list of empty elements initially to the factory',
      function() {
        expect(Users.list().length).toBe(0);
      });
    it('should be able to add a new user from the factory', function() {
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
    it('should be able to remove a new user from the factory', function() {
      var userData = {
        "name": "John",
        "surname": "Smith",
        "address": "18A, O'Connel St., Dublin, D1",
        "mobile": "+8521544785",
        "email": "jonh.smit@aib.ie"
      };
      Users.add(userData);
      expect(Users.list().length).toBe(1);
      Users.remove(0);
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
      expect(Users.userList.length).toBe(2);
      expect(JSON.stringify(Users.userList)).toBe(
        "[{\"name\":\"John\",\"surname\":\"Smith\",\"address\":\"18A, O'Connel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\":\"jonh.smit@aib.ie\"},{\"name\":\"Mark\",\"surname\":\"O'Connel\",\"address\":\"22, Parnel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\":\"mark.oconnel@yahoo.ie\"}]"
      );
    });
  */
});
