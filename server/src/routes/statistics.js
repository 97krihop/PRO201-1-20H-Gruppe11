const express = require("express");
const router = express.Router();

const db = require("../db/mongo")

const report = db.get("report");

module.exports = router;
