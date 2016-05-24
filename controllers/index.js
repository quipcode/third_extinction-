// var Question = require('../models/question');

// var questions = {};

// questions.index = function(req, res) {
//   Question.find({}, function(err, questions) {
//     if (err) return res.json(err);
//     res.json(questions);
//   });
// };

// questions.create = function(req,res){
//   var question = new Question;
//   question.title = req.body.title;
//   question.body = req.body.body;
//   question.createdAt = req.body.createdAt || Date.now();
//   question.save(function(err){
//     if (err){
//         throw err;
//     }
//     res.json({succcess: true, message: 'new question created'});
//   });
// };

// questions.show = function(req, res){
//   Question.find({title: req.params.title}, function(err, question){
//     if(err){
//       return res.json(err);
//     }
//     res.json(question);
//   });
// };

// questions.update = function(req, res){
//   Question.findOne({title: req.params.title}, function(err, question){
//     if(err){
//       return res.json(err);
//     }
//     if(req.query.vote == "up"){
//       question.voteUp(function(err, question){
//         if(err){
//           return res.json(err);
//         }
//           res.json(question);
//       });
//     }
//     if(req.query.vote == "down"){
//       question.vote -= 1;
//       question.save(function(err, question){
//         if(err){
//           return res.json(err);
//         }
//         return res.json(question);
//       });
//     }
//   });
// };

// questions.category = function(req, res){
//   Question.findByCategory(req.params.category, function(err, question){
//     if(err){
//       res.json(err);
//     }
//     res.json(question);
//   });
// };



// module.exports = questions;
