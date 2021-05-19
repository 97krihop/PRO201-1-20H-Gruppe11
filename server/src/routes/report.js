const express = require("express");
const monk = require("monk");

const router = express.Router();
const db = monk(process.env.MONGO_URI);

const report = db.get("report");
const users = db.get("users");


router.post("/report",async (req, res) => {
    console.log(JSON.stringify(req.user))

//    if (!req.user) return res.status(401).send();
//TODO: fix sewssion login to validate that that the is logged in before sending report
    //body example
    /*{

        "username" :"terst",
        "serialNumbers": "fddsfs",
        "modalTextBody": "sdfsf",
        "inputSerial" : "fsdfs",
        "parts":{
        "partNumber":"fdsd",
            "partName": "fcsd",
            "imgName": "sadf"
    }*/

    const reportData = req.body;
    try {
        await report.insert(reportData);
        res.sendStatus(200);
    }catch (e){
        res.status(500).send(e);
    }
})

module.exports = router;
