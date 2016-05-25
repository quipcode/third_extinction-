angular
  .module('myApp')
  .controller('DataController', DataController);

DataController.$inject = ['$http', '$stateParams'];

function DataController($http, $stateParams){
  var self = this;
  var searchString = encodeURIComponent($stateParams);

  $http({
    method: 'GET',
    url: 'http://api.gbif.org/v1/map/density/tile?x=0&y=0&z=1&type=TAXON&key=1&layer=OBS_2010_2020&layer=LIVING&layer=FOSSIL&palette=yellows_reds',
  }).then(function successCallback(response) {
    self.results = response.data;
    console.log(self.results);
  });


}
