const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const wheatherController=require("../controllers/whetherController")
const memeController=require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
//router.get('/cowin/getByDistrct',CowinController.getByDistrict)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
//assignement 1
router.get('/cowin/getByDistrct',CowinController.getByDistrict)

//assigment 2
router.get('/getwheather',wheatherController.getWheather)
router.get('/getsortedtemp',wheatherController.getSortedTemp)

//assigment 3
router.post('/meme',memeController.memecreate)
module.exports = router;