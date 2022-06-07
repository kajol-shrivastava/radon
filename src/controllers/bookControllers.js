//const { model } = require("mongoose")
const bookuser=require("../models/bookUserModel")

const createBook=async function(req,res){
    const detail=req.body
    const savedData=await bookuser.create(detail)
    res.send({added:savedData})
}

const getList=async function(req,res){
  const list=await bookuser.find().select({bookName:1,authorName:1,_id:0})
  res.send({allbooks:list})
}

const getBookbyYear=async function(req,res){
  const yr=req.body
  let result=await bookuser.find({year:yr.year})
  res.send({book:result})
}

const getParticularBook=async function(req,res){
  const val=req.body
  let result=await bookuser.find({$or:[{bookName:val.bookName},{authorName:val.authorName},{totalPages:val.totalPages},{year:val.year},{stockAvailable:val.stockAvailable}]})
  res.send({Yourbook:result})
}

const getXINRBooks=async function(req,res){
  //let result=await bookuser.find({"bookPrice.indianprice":"550INR"}).select({"bookprice.indianprice":1,_id:0})
  let result=await bookuser.find({"bookPrice.indianprice":{$in:["100INR","200INR","500INR"]}})                                                                                                                                                                          
  res.send({result:result})
}

const getRandomBook=async function(req,res){
  //const val=req.body
  let result=await bookuser.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
  res.send({Yourbook:result})
}
module.exports.createBook=createBook
module.exports.getList=getList
module.exports.getBookbyYear=getBookbyYear
module.exports.getParticularBook=getParticularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBook=getRandomBook
