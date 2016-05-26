angular
  .module("myApp")
  .controller("UserController", UserController);

UserController.$inject = ['$http'];

function UserController($http){
  var self = this;
  self.email = '';
  self.password = '';
  self.submitIt = submitIt;
  // self.data2 = {email: self.email, password: self.password};
  // self.parsed = JSON.parse(data2);
  self.all ={email: self.email, password: self.password};

  function submitIt(){
    var data2 = {email: self.email, password: self.password};
    // var parsed = JSON.parse(data2);
    console.log(data2);
    // console.log(parsed);
    $http.post('http://localhost:3000/token')
     .then(
       function(response){
         // success callback
         console.log(response);
         localStorage.setItem("response", JSON.stringify(response));
       },
       function(response){
         // failure callback
         console.log(response);
       }
    );

  }
}
