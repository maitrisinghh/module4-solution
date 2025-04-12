(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function() {
      return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
        .then(function(response) {
          return response.data;
        });
    };

    service.getItemsForCategory = function(categoryShortName) {
      var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json';
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    };
  }
})();
