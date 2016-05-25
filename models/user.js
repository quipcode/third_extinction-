var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  name:  String
});

// add bcrypt hashing to model (works on a password field)!
userSchema.plugin(require('mongoose-bcrypt'));

var User = mongoose.model('User', userSchema);

module.exports = User;
