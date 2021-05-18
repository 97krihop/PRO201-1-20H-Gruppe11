const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');
const rateSpeedLimiter = require('express-slow-down');
const auth = require('server/src/routes/auth.js')
const app = express();
app.set('trust proxy', 1);

//Passport
const passport = require('passport');
const initializePassport = require('./config/passport');

const sessionParser = session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
});

const rateSpeedLimit = rateSpeedLimiter({
  delayAfter: 50, // slow down limit (in reqs)
  windowMs: 1 * 60 * 1000, // time where limit applies
  delayMs: 2500, // slow down time
});

const whitelist = ['http://localhost:8080', 'http://example2.com'];
const corsOptionsDelegate = function (req, callback) {
  const corsOptions =
    whitelist.indexOf(req.header('Origin')) !== -1
      ? { origin: true }
      : { origin: false };
  callback(null, corsOptions);
};

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);
app.use(helmet());
app.use(rateSpeedLimit);
app.use(cors(corsOptionsDelegate));
//Passport initialization
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

//routers
app.use(auth)

app.get('/', (req, res) => {
  res.send('test');
});

module.exports = app;
