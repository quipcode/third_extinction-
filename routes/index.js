// var questions = require('../controllers/questions_controller');
var express = require('express');
var router = express.Router();


router.route('/')
  .get(function(req,res){
    res.render('index');
  });
//   .post(questions.create);

// router.route('/:title')
//   .patch(questions.update)
//   .get(questions.show);

// router.route('/:category')
//   .get(questions.category);

module.exports = router;
