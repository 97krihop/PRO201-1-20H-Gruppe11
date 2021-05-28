const bcrypt = require("bcrypt");
const login = async (agent) => {
  return await agent
    .post("/api/login")
    .send({
      username: "test",
      password: "admin",
    })
    .set("Content-Type", "application/json");
};

const addAdmin = async (db) => {
  const user = db.get("users");
  const password = await bcrypt.hash("admin", 10);
  user.insert({
    username: "test",
    password: password,
    admin: true,
    campName: "Bright",
  });
  console.log(await user.find({}))
};

module.exports = { login, addAdmin };
