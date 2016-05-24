var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');
var port = process.env.PORT || 3000;

var route = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/', route);

app.listen(port, function(){
  console.log('Listening on port ' + port);
});

