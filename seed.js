var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/third_extinction');
var User = require('./models/user');

User.remove({})
  .then(function(){
    console.log('creating user');
    var user = User.create({
      email: 'admin@ga.co',
      name: 'admin',
      password: 1234
    });
    return user;
  })
  .then(function(user){
      console.log('created', user.name);
  })
  .then(function(){
    process.exit();
  });
