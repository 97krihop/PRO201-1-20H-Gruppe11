const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const sessionParser = session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
});

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);

app.get('/', (req, res) => {
  res.send('test');
});

module.exports = app;
