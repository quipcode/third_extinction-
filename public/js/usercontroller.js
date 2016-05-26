angular
  .module("myApp")
  .controller("UserController", UserController);

UserController.$inject = ['$http'];

function UserController($http){
  var self = this;
  self.email = 'h';
  self.password = '';
  self.submitIt = submitIt;
  // self.data2 = {email: self.email, password: self.password};
  // self.parsed = JSON.parse(data2);
  self.all ={email: self.email, password: self.password};

  function submitIt(){
    var data2 = {email: self.email, password: self.password};
    // var parsed = JSON.parse(data2);
    console.log(data2);
    $http.post('http://localhost:3000/token', data2)
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


// $('form').on('submit', function(event){
//   event.preventDefault();
//   var email = $('#email').val();
//   var password = $('#password').val();
//   $.ajax({
//     url: 'http://localhost:3000/token',
//     method: 'POST',
//     data: {email: email, password: password},
//   }).done(function(response) {
//     // $( this ).addClass( "done" );
//     console.log(response);

//     localStorage.setItem("response", JSON.stringify(response));
//   });

// });
