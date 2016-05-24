angular
  .module('myApp')
  .controller('DataController', DataController);

DataController.$inject = ['$http', '$stateParams'];

function DataController($http, $stateParams){
  var self = this;
  var searchString = encodeURIComponent($stateParams);

  $http({
    method: 'GET',
    url: 'http://api.gbif.org/v1/occurrence/search?year=1800,1899'
  }).then(function successCallback(response) {
    self.results = response.data;
    console.log(self.results);
  });


}
