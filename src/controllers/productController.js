const user= require('../models/user')
const order=require('../models/order')
const product = require('../models/product')

const createProduct= async function(req,res){
    const data=req.body
    const savedData=await product.create(data)
     res.send({added:savedData})
}
 

module.exports.createProduct=createProduct
