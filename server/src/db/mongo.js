const monk = require("monk");
const bcrypt = require("bcrypt");

const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});

const addAdmin = async () => {
  const user = db.get("users");
  if (await user.find({})) {
    const password = await bcrypt.hash("admin", 10);
    user.insert({
      username: "bright",
      password: password,
      admin: true,
      campName: "Bright",
    });
  }
};
addAdmin();

module.exports = db;
