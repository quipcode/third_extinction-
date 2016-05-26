var express = require('express');
var token = require('../controllers/token_controller');
var router = express.Router();

router.post('/',token.findUser, token.validateUser, token.create);

module.exports = router;
