var jwt = require('jsonwebtoken');
var User = require('../models/user');
var secret = "shhh";
var controller = {};

controller.findUser = function(req, res, next) {
  User.findOne({email: req.body.email})
    .then(function(user){
      if (!user) {
        next({
          status:  401,
          message: 'Authentication failed: credentials incorrect'
        });
      }
      req.user = user;
      next();
    })
    .catch(function(err){
      next(err);
    });
};

controller.validateUser = function(req, res, next) {
  req.user.verifyPassword(req.body.password, function(err, valid){
    console.log(err, valid);
    if (!valid) {
      next({
        status:  401,
        message: 'Authentication failed: credentials incorrect'
      });
    } else {
      next();
    }
  });
};

controller.create = function(req, res, next) {
  console.log('creating token');

  var token = jwt.sign(
    {
      email: req.user.email
    },
    secret
    // {
    //   expiresIn: 90 // 30 seconds, so we can test better
    // }
  );

  res.json({
    success:    true,
    message:    'Successfully generated token',
    token:      token,
    seeDecoded: 'http://jwt.io/?value=' + token
  });
};

controller.verify = function(req, res, next) {
  var authHeader = req.get('Authorization');
  if (!authHeader) {
    next({
      status:  401,
      message: 'Authentication failed: missing auth header'
    });
  }
  console.log('verifying token', authHeader);
  var token = authHeader.split(' ')[1];
  jwt.verify(token, secret, function(err, decoded){
    if (err) return next(err);
    req.decoded = decoded;
    next();
  });
};

module.exports = controller;
