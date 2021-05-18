const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const router = express.Router();
//Data
//TODO communicate with db
const users = require("../data/users");
//Controllers
//TODO communicate with db
const { addUser } = require("../controllers/userController");

//Local login route -- Authenticates with passport and bcrypt for password hashing/unh
router.post("/login/local", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).send({ messages: info });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            //Sending necessary data to frontend -- Extracting necessary info from req.user to avoid sending whole user object which includes password
            let userInfo = {
                username: req.user.username,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                email: req.user.email,
            };
            res.status(200).send(userInfo);
        });
    })(req, res);
});
//Registration route -- Saves user in user storage after hashing password. -- Error handling and a bit of input validation/sanitation is done in frontend.
router.post("/register", async (req, res) => {
    const username = users.find((user) => req.body.username === user.username);
    if (!username) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            //TODO communicate with DB
            addUser(
                req.body.username,
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                hashedPassword
            );
            res.sendStatus(200);
        } catch (e) {
            res.status(500).send(e);
        }
    } else {
        res.status(409).send("Username already exists");
    }
});
//Invoking logout() will remove the req.user property and clear the login session (if any).
router.get("/logout", (req, res, next) => {
    req.logout();
    //TODO Update redirect route
    res.redirect("/");
});
module.exports = router;
