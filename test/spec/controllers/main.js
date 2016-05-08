'use strict';

//require(['../../mock/service-mock']);
describe('Controller: MainCtrl', function() {

  // load the controller's module

  beforeEach(module('angularspaApp'));
  // beforeEach(module('angularspaMocks'));
  // beforeEach(module('sinon'));
  var MainCtrl,
    scope,
    provide;
  beforeEach(function($provide) {
    provide = $provide;
    //alert('provide = ' + provide);
  });
  beforeEach(inject(function(_MainCtrl_, $controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = _MainCtrl_;
    // MainCtrl = $controller('MainCtrl', {
    //   $scope: scope,
    //   Users: provide.get('UsersMock')
    // });
  }));
  /*
    it('should attach a list of empty elements initially to the scope',
      function() {
        alert('MainCtrl = ' + MainCtrl);
        expect(JSON.stringify(MainCtrl.list().length)).toBe(0);
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
      expect(MainCtrl.list().length).toBe(1);
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
      expect(MainCtrl.list().length).toBe(1);
      MainCtrl.remove(1);
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
      expect(MainCtrl.list().length).toBe(2);
      expect(JSON.stringify(MainCtrl.list())).toBe(
        "[{\"name\":\"John\",\"surname\":\"Smith\",\"address\":\"18A, O'Connel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\":\"jonh.smit@aib.ie\"},{\"name\":\"Mark\",\"surname\":\"O'Connel\",\"address\":\"22, Parnel St., Dublin, D1\",\"mobile\":\"+8521544785\",\"email\:\"mark.oconnel@yahoo.ie\"}]"
      );
    });
    */
});
