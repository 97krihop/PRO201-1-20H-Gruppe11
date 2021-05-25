const express = require("express");
const router = express.Router();
const monk = require("monk");
const Joi = require("joi");

const db = monk(process.env.MONGO_URI);
db.then(() => {
  console.log("connection success");
}).catch((e) => {
  console.error("Error !", e);
});

const camp = db.get("camp");

const schema = Joi.object({
  name: Joi.string().alphanum().required(),
  type: Joi.string().alphanum().required(),
  coordinates: Joi.array().items(Joi.number()).length(2).required(),
});

router.get("/", async (req, res) => {
  // get all camps
  const camps = await camp.find({});
  res.json(camps);
});
router.get("/:name", async (req, res) => {
  // get one camp
  const { name } = req.params;
  const camps = await camp.findOne({ name: name });
  res.json(camps);
});

router.post("/", async (req, res) => {
  // create one camp

  /*
  {
	  "name":"osloNorway",
	  "type":"asdf",
	  "coordinates":[
		  1.222333,
		  13.12312
	  ]
  }
 */
  if (!req.user) return res.status(401).send();

  try {
    const value = await schema.validateAsync(req.body);
    const camps = await camp.findOne({ name: value.name });
    if (camps)
      return res.status(400).json({ error: "already a camp with that name" });
    try {
      await camp.insert(value);
      res.sendStatus(200);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

module.exports = router;
