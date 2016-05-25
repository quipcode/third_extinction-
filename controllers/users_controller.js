var controller = {};
var User = require('../models/user');

controller.index = function(req, res, next){
  User.find({})
    .then(function(users){
      res.json(users);
    })
    .catch(function(err){
      next(err);
    });
};

controller.create = function(req, res, next) {
  User.create({
    email: req.body.email,
    name: req.body.name,
    dob: req.body.dob
  })
  .then(function(user){
    res.json(user);
  })
  .catch(function(err){
    next(err);
  });
};

module.exports = controller;
