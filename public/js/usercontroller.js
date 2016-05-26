angular
  .module("myApp")
  .controller("UserController", UserController);

UserController.$inject = ['$http'];

function UserController($http){
  var self = this;
  self.email = '';
  self.password = '';
  // self.submitIt = submitIt;
  // self.data2 = {email: self.email, password: self.password};
  // self.parsed = JSON.parse(data2);


  // function submitIt(){
  //   var data2 = {email: self.email, password: self.password};
  //   var parsed = JSON.parse(data2);
  //   $http.post('http://localhost:3000/token', parsed)
  //    .then(
  //      function(response){
  //        // success callback
  //        console.log(response);
  //      },
  //      function(response){
  //        // failure callback
  //        console.log(response);
  //      }
  //   );
    // $http({
    //   method: 'POST',
    //   url: 'http://localhost:3000/token',
    //   data: data2
    // }).then(function successCallback(response) {
    //     console.log(response);
    //     // this callback will be called asynchronously
    //     // when the response is available
    //         // localStorage.setItem("response", JSON.stringify(response));
    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

  // }
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
