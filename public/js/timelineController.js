angular
  .module('myApp')
  .controller('TimelineController', TimelineController);

TimelineController.$inject = ['$http'];

function TimelineController($http){
  var self = this;
  self.hope = ["this is a controller"];
  self.animal =[{name: "California Grizzly Bear", year: 1924}, {name: "Newfoundland Wolf",year: 1930}, {name: "Tasmanian Tiger",year: 1936}, {name: "Bali Tiger",year: 1940},{name:"Guam Flying Fox",year: 1968}, {name:"Cuban Ivory-Billed Woodpecker",year: 1990}, {name: "Jamaican Giant Galliwasp", year: 1996}, {name: "Zanzibar Leopard",year: 1996}, {name: "Baiji",year: 2006}, {name: "Pyrenean Ibex",year:2009}];
  self.lineInView = lineInView;
  self.inviewLogs = [];
  self.goHome = goHome;

  function lineInView(){
    var myEl = angular.element( document.querySelector( '.timeline2 ul li' ) );
    myEl.addClass('in-view');
  }

  function goHome(){
    $http({
      method: 'GET',
      url: 'http://localhost:3000/'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    $http
  }
}


