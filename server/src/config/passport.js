const LocalStrategy = require("passport-local").Strategy;
//Importing user storage -- Should be stored in database
//TODO communicate with DB
const users = require("../data/users");
//controllers
//TODO communicate with DB
const { addUser } = require("../controllers/userController");
//Bcrypt - Hashing
const bcrypt = require("bcrypt");

//Oauth20 strategy - Adds user to server storage after authentication is done.
module.exports = function initialize(passport) {
  //Local login-strategy using bcrypt to decrypt passwords
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = users.find((user) => username === user.username);
      console.log("user" + user);
      if (!user) {
        console.log("No user with that username");
        return done(null, false, { message: "Incorrect username/password." });
      }
      try {
        let passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          console.log("User " + user.username + " successfully logged in ");
          return done(null, user);
        } else {
          console.log("Unsuccessful authorization for user: " + user.username);
          return done(null, false, { message: "Incorrect username/password" });
        }
      } catch (e) {
        return done(e);
      }
    })
  );
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((id, done) => done(null, id));
};
