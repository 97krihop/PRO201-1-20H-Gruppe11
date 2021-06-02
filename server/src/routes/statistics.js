const express = require("express");
const router = express.Router();
const {
  getRepairsCountByMonth,
  getPartsCountArray,
  getRepsByNamePerMonth,
  getPartsByCamp,
  getPartsCountByCamp
} = require("../controllers/PartStatisticsController");
const db = require("../db/mongo");

const report = db.get("report");
const camp = db.get("camp");

router.get("/totalRepairs", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await report.count({});
  res.json({ totalRepairs: count });
});

router.get("/repairs-by-camp/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await getPartsByCamp(name);
  res.json(data);
});
router.get("/repairs-by-camp", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const camps = await camp.find({});
  const resul = camps
    .map(async x => await getPartsByCamp(x.name))
    .map(y => y.count);
  const data = camps.map((x, i) => {
    return { ...x, campRepairs: resul[i] };
  });
  res.json(data);
});
router.get("/parts-by-camp/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await getPartsCountByCamp(name);
  res.json(data);
});

router.get("/total-parts-List", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const count = await getPartsCountArray();
  res.json({ totalRepairs: count });
});

router.get("/repairs-by-month", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const data = await getRepairsCountByMonth();
  res.json(data);
});

router.get("/repairs-by-month/:name", async (req, res, next) => {
  if (!req.user || !req.user.admin) return next();
  const { name } = req.params;
  const data = await getRepsByNamePerMonth(name);
  res.json(data);
});

module.exports = router;
