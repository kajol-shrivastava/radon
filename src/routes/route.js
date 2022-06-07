const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const authorbookController=require("../controllers/authorBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post('/createauthor',authorbookController.create)

router.post('/creatbook',authorbookController.createBook)

module.exports = router;