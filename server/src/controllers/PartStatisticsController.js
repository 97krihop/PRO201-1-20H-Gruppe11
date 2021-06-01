const db = require("../db/mongo");
const reports = db.get("report");

const getPartCountByPartName = async (param) => {
  return await reports.count({ "parts.partName": param });
};

const getPartCountByPartNumber = async (param) => {
  return await reports.count({ "parts.partNumber": param });
};

const getPartsByPartName = async (param) => {
  return await reports.find({ "parts.partName": param });
};

const getPartsByPartNumber = async (param) => {
  return await reports.find({ "parts.partNumber": param });
};

const getPartsByCamp = async (param) => {
  return await reports.find({ campName: param });
};

const getPartsCountArray = async () => {
  const names = [
    "Lamp",
    "12V charger",
    "Battery",
    "Power button",
    "Light bulb",
    "Screen",
    "Socket charger",
    "Solar panel",
  ];
  const res = [];
  for (const name of names) {
    const data = await getPartCountByPartName(name);
    res.push({ name, count: data });
  }
  return res;
};

const getRepairsCountByMonth = async () => {
  const data = await reports.aggregate([
    {
      $group: {
        _id: { $substr: ["$createdAt", 2, 5] },
        count: { $sum: 1 },
      },
    },
  ]);
  let year = null;
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  data
    .sort((e1, e2) => (e1._id < e2._id ? 1 : -1))
    .filter((e) => {
      if (year === null) year = e._id.slice(0, 2);
      return e._id.slice(0, 2) === year;
    })
    .forEach((e) => (arr[parseInt(e._id.slice(3)) - 1] = e.count));
  return arr;
};

const getRepsByNamePerMonth = async (name) => {
  const data = await getPartsByPartName(name);
  let year = null;
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  data
    .sort((e1, e2) => (e1.createdAt < e2.createdAt ? 1 : -1))
    .filter(({ createdAt }) => {
      if (year === null) year = createdAt.getFullYear();
      return createdAt.getFullYear() === year;
    })
    .map((e) => e.createdAt.getMonth())
    .forEach((e) => arr[e]++);
  return arr;
};

module.exports = {
  getPartCountByPartName,
  getPartCountByPartNumber,
  getPartsByPartName,
  getPartsByPartNumber,
  getRepairsCountByMonth,
  getPartsCountArray,
  getRepsByNamePerMonth,
  getPartsByCamp,
};
