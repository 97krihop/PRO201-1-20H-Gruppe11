const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const helmet = require("helmet");
const rateSpeedLimiter = require("express-slow-down");

const app = express();
app.set("trust proxy", 1);

//Passport
const passport = require("passport");
const initializePassport = require("./config/passport");

//Passport initialization
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

const sessionParser = session({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false,
});

const rateSpeedLimit = rateSpeedLimiter({
  delayAfter: 200, // slow down limit (in reqs)
  windowMs: 1 * 60 * 1000, // time where limit applies
  delayMs: 2500, // slow down time
});

//use middleware
app.use(bodyParser.json());
app.use(sessionParser);
app.use(helmet());
app.use(rateSpeedLimit);

app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/test"));

app.get("/", (req, res) => {
  res.json({ name: "test" });
});

module.exports = app;
