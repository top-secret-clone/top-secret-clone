// External Modules //
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// Config NOTE don't forget to .gitignore this! //
var config = require('./config');

// Express //
var app = express();
app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.json());

// Controllers //
var userController = require('./controllers/userController');

// Services //
var passport = require('./services/passport');

// Policies //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

// Session and Passport //
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Passport Endpoints //
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next){
  req.logout();
  return res.status(200).send('logged out');
});

// User Endpoints //
app.post('/register', userController.register);
app.get('/user', userController.read);
app.get('/me', isAuthed, userController.me);
app.put('/user/:_id');

// Connections //
var mongoURI = config.MONGO_URI;
var port = config.PORT;
mongoose.connect(mongoURI);

// Listen //
mongoose.connection.once('open', function(){
  console.log('Connected to MongoDB at', mongoURI);
  app.listen(port, function(){
    console.log('Listening on port '+ port);
  });
});
