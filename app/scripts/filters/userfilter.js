'use strict';

/**
 * @ngdoc filter
 * @name angularspaApp.filter:userFilter
 * @function
 * @description
 * # userFilter
 * Filter in the angularspaApp.
 */
angular.module('angularspaApp')
  .filter('bySurnameAndName', ['Users', function() {
    return function(users, searchText) {
      if (searchText === '' || !searchText) {
        return users;
      }
      var formattedSearchText = searchText.toLowerCase();
      return users.filter(function(userData) {
        return (userData.surname + ' ' + userData.name).toLowerCase()
          .indexOf(formattedSearchText) >= 0 || (userData.name + ' ' +
            userData.surname).toLowerCase().indexOf(
            formattedSearchText) >= 0;
      });
    };
  }]);
