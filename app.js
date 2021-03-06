var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path');
// var port = process.env.PORT || 3000;
var port = process.env.PORT || 3000;
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var http = require('http');

var server = http.createServer(app);

server.listen(port);


app.set('port', port);

mongoose.connect(process.env.MONGOLAB_RED_URI || 'mongodb://localhost/third_extinction');


var users = require('./routes/users');
var token = require('./routes/token');
var route = require('./routes/index');
var timeline = require('./routes/timeline');
var map = require('./routes/map');
var volunteer = require('./routes/volunteer');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

app.use('/', route);
app.use('/timeline', timeline);
app.use('/token', token);
app.use('/users', users);
app.use('/map', map);
app.use('/volunteer', volunteer);

app.use(cookieParser('notsosecretnowareyou'));
app.use(session({
  secret: 'anotherfoolishsecret',
  saveUninitialized: true,
  resave: true
}));

// CORS (allows the separate client to send requests)…
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');

   next();
};
app.use(allowCrossDomain);

