const db = require("../db/mongo");
const reports = db.get("report");

const getPartCountByPartName = async param => {
  //reports.count({ parts: { $elemMatch: { partName: param } } });
  return await reports.count({ "parts.partName": param });
};
const getPartCountByPartNumber = async param => {
  //reports.count({ parts: { $elemMatch: { partNumber: param } } });
  return await reports.count({ "parts.partNumber": param });
};
const getPartCountByMonth = async () => {
  return await reports.aggregate([
    {
      $group: {
        _id: { $substr: ["$createdAt", 2, 5] },
        count: { $sum: 1 }
      }
    }
  ]);
};

module.exports = {
  getPartCountByPartName,
  getPartCountByPartNumber,
  getPartCountByMonth
};
