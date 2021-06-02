const express = require("express");
const router = express.Router();
const {
  getRepairsCountByMonth,
  getPartsCountArray,
  getRepsByNamePerMonth,
  getPartsByCamp,
  getPartsCountByCamp,
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
  let camps = await camp.find({});
  if (camps.length === 0) {
    await camp.insert([
      {
        name: "Pugnido",
        Country: "ethiopia",

        coordinates: [7.681051391626661, 34.00543212890625],
      },
      {
        name: "Katumba",
        Country: "Tanzania",

        coordinates: [-6.287998672327658, 31.02813720703125],
      },
      {
        name: "Hagadera",
        Country: "Kenya",
        coordinates: [0.17028783523693297, 40.5230712890625],
      },
      {
        name: "Yida",
        Country: "South Sudan",
        coordinates: [10.244654445228324, 30.047607421875],
      },
    ]);
    camps = await camp.find({});
  }
  const result = Promise.all(
    camps.map(async (x) => await getPartsCountByCamp(x.name))
  );
  const arr = await result;
  const data = camps.map((x, i) => {
    return { ...x, campRepairs: arr.map((y) => y.map((z) => z.count))[i] };
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
