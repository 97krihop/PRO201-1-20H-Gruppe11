const express = require("express");
const router = express.Router();
const db = monk(process.env.MONGO_URI);


const report = db.get("report");
const users = db.get("users");



router.post("/report",async (req, res, next) => {
    const userName = await req.body.username

    if(!userName || users.findOne(userName) === null) res.status(401).json("please log in")


    //body example
    // body ={
    //     userName,
    //     serialNumbers,
    //     modalTextBody,
    //     inputSerial,
    //     parts:{
    //         partNumber,
    //         partName,
    //         imgName,
    //     }
    // }
    let reportData = req.body;
    try {
        await report.insert(reportData);
        res.sendStatus(200);
    }catch (e){
        res.status(500).send(e);
    }



})