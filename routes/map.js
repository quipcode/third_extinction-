var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
  res.render('maps', {api_key: process.env.GOOGLE_MAPS_API_KEY});
});

module.exports = router;
