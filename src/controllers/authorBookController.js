const author = require('../models/author')
const book=require('../models/bookauthor')

const create= async function(req,res){
    const data=req.body
    const savedData=await author.create(data)
    res.send({added:savedData})
}
 
const createBook=async function(req,res){
    const data=req.body
    const result= await author.findOne({author_id:data.author_id})
    let a=null
    if(result){
     let savedData=await book.create(data)
       return res.send({added:savedData})
    }
   else{
         res.send({msg:"invalid author id"})
    }

}

const getBookByAuthor=async function(req,res){
    let detail=await author.findOne({author_name:"Chetan Bhagat"})
    let temp=detail.author_id
    let result=await book.find({author_id:temp})
    res.send({msg:result})
}

const updatePrice=async function(req,res){
    let result=await book.findOneAndUpdate({name:"Two states"},{$set:{price:100}})
    let temp=result.author_id
     let nm=await author.findOne({author_id:temp}).select({author_name:1,_id:0})
    let updatePrice=result.price
    let updateresult={name_of_author:nm.author_name,updated_price:updatePrice}
    res.send({msg:updateresult})
}

const getBookByPrice=async function(req,res){
    let bookByPrice={}
    let result= await book.find({price:{$gte:50,$lte:100}}) 
    for(let x in result){
        let temp=await author.findOne({author_id:result[x].author_id})
        bookByPrice[result[x].name]=temp.author_name
      }
    res.send({msg:bookByPrice})
}
module.exports.create=create
module.exports.createBook=createBook
module.exports.getBookByAuthor=getBookByAuthor
module.exports.updatePrice=updatePrice
module.exports.getBookByPrice=getBookByPrice