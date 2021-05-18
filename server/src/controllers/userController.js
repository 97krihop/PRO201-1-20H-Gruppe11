const users = require("../data/users");
//Adds user to storage. Should migrate storage to a datbase in the future.
const addUser = (username, firstName, lastName, email, password) => {
  users.push({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
};

module.exports = { addUser };
