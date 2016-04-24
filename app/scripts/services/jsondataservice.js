'use strict';

/**
 * @ngdoc service
 * @name angularspaApp.jsonDataService
 * @description
 * # jsonDataService
 * Service in the angularspaApp.
 */
angular.module('angularspaApp').factory('jsonDataService', function($http) {
  var factory = {};
  factory.$http = $http;
  factory.userList = [];
  factory.load = function() {
    var url = 'http://localhost:9995/users';
    this.$http.get(url).success(function(data) {
      this.userList = data;
    }.bind(this)).error(function() {
      this.userList = [];
      console.log('Error loading the json file ...');
    }.bind(this));
    // var promise = this.$http.get(url, {
    //   cache: false
    // }).then(function(response) {
    //   this.userList = response.data.users;
    // });
  };
  factory.save = function() {
    var url = 'http://localhost:9995/users';
    this.userList.forEach(function(user, index) {
      this.$http.post(url + '/' + (index + 1), user).success(
        function() {
          //this.userList = data.users;
          console.log('Json file changes saved correctly ...');
        }.bind(this)).error(function() {
        //this.userList = [];
        console.log('Error loading the json file ...');
      }.bind(this));
    }.bind(this));
    // var promise = this.$http.get(url, {
    //   cache: false
    // }).then(function(response) {
    //   this.userList = response.data.users;
    // });
  };
  factory.load();
  return factory;
});
//jsonDataService.$inject = ['$http'];
// jsonDataService.factory('UsersGet', ['$http', function($http) {
//   // var data = {
//   //   'users': []
//   // };
//   // var url = '/#/users.json';
//   // var promise = $http.get(url, {
//   //   cache: false
//   // }).then(function(response) {
//   //   data = response.data;
//   // });
//   // return data;
//   $http.get('users.json').success(function(data, status, headers) {
//     $scope.users = data.users;
//   }).error(function(data, status, header, config) {
//     $scope.users = [];
//   });;
// }]);
// jsonDataService.factory('UsersUpdate', ['$scope', '$http', function($scope,
//   $http) {
//   $http.put('users.json', userList).success(function(data, status,
//     headers) {
//     $scope.success = true;
//   }).error(function(data, status, header, config) {
//     $scope.success = false;
//   });;
// }]);
// jsonDataService.factory('UsersDetails', ['$resource', function($resource) {
//   return $resource('users/userdetail_:userId.json', {}, {
//     query: {
//       method: 'GET',
//       params: {
//         userId: 'users'
//       },
//       isArray: true
//     }
//   });
// }]);
