const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const monk = require("monk");

const router = express.Router();

const db = monk(process.env.MONGO_URI);
const users = db.get("users");
//Local login route -- Authenticates with passport and bcrypt for password hashing/unh
router.post("/login/local", (req, res, next) => {

  passport.authenticate("local", function (err, user, info) {
    if (err) return next(err);

    if (!user) return res.status(401).send({ messages: info });

    req.logIn(user, function (err) {
      if (err) return next(err);

      //Sending necessary data to frontend -- Extracting necessary info from req.user to avoid sending whole user object which includes password
      let userInfo = {
        ...req.user,
        password: undefined,
      };
      res.status(200).send(userInfo);
    });
  })(req, res);
});
//Registration route -- Saves user in user storage after hashing password. -- Error handling and a bit of input validation/sanitation is done in frontend.
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const username = await users.findOne({ username: req.body.username });
  if (!username)
    try {
      const user = {
        ...req.body,
        password: hashedPassword,
      };
      await users.insert(user);

      res.sendStatus(200);
    } catch (e) {
      res.status(500).send(e);
    }
  else res.status(409).json({ messages: "Username already exists" });
});
//Invoking logout() will remove the req.user property and clear the login session (if any).
router.get("/logout", (req, res, next) => {
  req.logout();
  //TODO Update redirect route
  res.redirect("/");
});
module.exports = router;
