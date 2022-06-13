const order=require('../models/order')
const newuser=require('../models/user')
const product=require('../models/product')
const { resetWatchers } = require('nodemon/lib/monitor/watch')
const { findOneAndUpdate, findOne } = require('../models/user')
const res = require('express/lib/response')
const user = require('../models/user')

const createOrder= async function(req,res){
    req.body.date=new Date().toLocaleDateString('en-US')
    const temp=req.body
    const userdata=await newuser.findById(req.body.userid)
    if (userdata===null)
    res.send({error:"plese enter a valid userid"})
    const productdata=await product.findById(req.body.productid)
    if(productdata===null)
    res.send({error:"please send the valid  product id"})
    const flag=req.headers.isfreeappuser
    // const userdata=await user.findOne({_id:temp.userid})
    // const productdata=await product.findOne({_id:temp.productid})
    const saved= await order.create(temp)
    if(flag=='true'){
        const one=await order.findOneAndUpdate({_id:saved._id},{$set:{amount:0}})
        let upreeuser=await user.findOneAndUpdate({_id:userdata._id},{$set:{isFreeAppUser:true}})
      }
      else if(userdata.balance>productdata.price){
              price=productdata.price
              const upbalnce=await user.findOneAndUpdate({_id:userdata._id},{$inc:{balance:-price},$set:{isFreeAppUser:false}})
              const one=await order.findOneAndUpdate({_id:saved._id},{$set:{amount:productdata.price}})
             }
          else{
              res.send({msg:"insufficent balance"})
              }
          
const savedData=await order.findOne({_id:saved._id}).populate('userid').populate('productid')
res.send({msg:savedData})

}

module.exports.createOrder=createOrder