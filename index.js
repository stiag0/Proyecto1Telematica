// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
var promise = mongoose.connect('mongodb://localhost/proyecto1telematica', {
  useMongoClient: true,
  /* other options */
}); // connect to our database

 require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended:true})); // get information from html forms<<<<<<< HEAD
app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'unetsyscomikrohotel', saveUninitialized: true,
                proxy:true, resave:true})); // session secret=======

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'unetsyscomikrohotel', saveUninitialized: true, 
                proxy:true, resave:true })); // session secret>>>>>>> 0be6744ec361e7853031a3c71e8c63a1401d4261
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
