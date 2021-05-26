const db = require("../db/mongo");
const reports = db.get("report");

const getPartCountByPartName = async (param) => {
  return reports.count({parts: {$elemMatch: {partName : param}}});

};
const getPartCountByPartNumber = async (param) => {
  return reports.count({parts: {$elemMatch: {partNumber : param}}});

};

module.exports = { getPartCountByPartName ,getPartCountByPartNumber};
