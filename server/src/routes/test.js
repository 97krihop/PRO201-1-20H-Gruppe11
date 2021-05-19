const express = require("express");
const monk = require("monk");

const router = express.Router();

const db = monk(process.env.MONGO_URI);
const user = db.get("users");

router.get("/user", async (req, res) => {
  const items = await user.find({});
  res.json(items);
});

router.post("/user", async (req, res) => {
  const data = req.body;
  user.insert(data);
  res.status(204).send();
});

module.exports = router;
