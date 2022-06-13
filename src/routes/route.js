const express = require('express');
const router = express.Router();
const MW=require('../middleware/commonmiddlewares')
const productController=require('../controllers/productController')
const userController=require('../controllers/userController')
const orderController=require('../controllers/orderController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// //assignment
 router.post('/createProduct',productController.createProduct)
 router.post('/createUser',MW.checkfreeAppUser,userController.createUser)
 router.post('/createOrder',MW.checkfreeAppUser,orderController.createOrder)
//  router.post('/createProduct',productController.createpublisher)
//  router.post('/createbook',bookController.creatbook)
//  router.get('/getbooks',bookController.getbooks)
// router.put('/ishardcover',bookController.updated_field)
// router.put('/updatedprice',bookController.updated_price)



module.exports = router;