const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
//Passport
const passport = require("passport");
const initializePassport = require("./config/passport");

//Passport initialization
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

const sessionParser = session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: Number(process.env.COOKIE_MAX_AGE),
    sameSite: true,
  },
});

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);

app.get('/', (req, res) => {
  res.send('test');
});

module.exports = app;
