const express = require("express");
const router = express.Router();

const db = require("../db/mongo");

const report = db.get("report");

router.get("/totalRepairs", async (req, res) => {
  if (!req.user || !req.user.admin) return res.status(401).send();

  const count = await report.count({});
  res.json({ totalRepairs: count });
});

module.exports = router;
