var express = require('express');
var router = express.Router();
var users = require('../controllers/users_controller');
var token = require('../controllers/token_controller');

/* GET users listing. */
router.get('/', token.verify, users.index);
router.post('/', users.create);

module.exports = router;
