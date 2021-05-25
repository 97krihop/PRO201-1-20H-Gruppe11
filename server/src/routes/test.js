const express = require("express");
const monk = require("monk");

const router = express.Router();

const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});
const user = db.get("users");
const report = db.get("report");

router.get("/user", async (req, res) => {
  // if (!req.user) return res.status(401).send();
  const items = await user.find({});
  res.json(items);
});

router.post("/user", async (req, res) => {
  const data = req.body;
  user.insert(data);
  res.status(204).send();
});

router.post("/reports/test", async (req, res) => {
  const data = require("../testDataReport")();
  await report.insert(data);
  res.status(204).send();
});

module.exports = router;
