angular
  .module('myApp')
  .controller('TimelineController', TimelineController);

function TimelineController(){
  var self = this;
  self.hope = ["this is a controller"];
  self.animal =[{name: "California Grizzly Bear", year: 1924}, {name: "Newfoundland Wolf",year: 1930}, {name: "Tasmanian Tiger",year: 1936}, {name: "Bali Tiger",year: 1940},{name:"Guam Flying Fox",year: 1968}, {name:"Cuban Ivory-Billed Woodpecker",year: 1990}, {name: "Jamaican Giant Galliwasp", year: 1996}, {name: "Zanzibar Leopard",year: 1996}, {name: "Baiji",year: 2006}, {name: "Pyrenean Ibex",year:2009}];
}


