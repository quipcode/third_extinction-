var express = require('express');
var router = express.Router();
var users = require('../controllers/users_controller');
var token = require('../controllers/token_controller');

/* GET users listing. */
router.get('/', users.index);
router.post('/', users.create);
router.get('/login', function(req,res){
  res.render('login_page');
})

module.exports = router;
