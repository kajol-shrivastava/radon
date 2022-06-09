const express = require('express');
const router = express.Router();
const authorController=require("../controllers/authorController")
const pulisherController=require("../controllers/publisherController")
const bookController=require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// //assignment
 router.post('/createauthor',authorController.create)
 router.post('/createpublisher',pulisherController.createpublisher)
 router.post('/createbook',bookController.creatbook)
 router.get('/getbooks',bookController.getbooks)
router.put('/ishardcover',bookController.updated_field)
router.put('/updatedprice',bookController.updated_price)



module.exports = router;