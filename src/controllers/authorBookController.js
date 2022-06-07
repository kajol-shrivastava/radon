const author = require('../models/author')
const book=require('../models/bookauthor')

const create= async function(req,res){
    const data=req.body
    const savedData=await author.create(data)
    res.send({added:savedData})
}
 
const createBook=async function(req,res){
    const data=req.body
    console.log(data.author_id)
    const result= await author.findOne({author_id:data.author_id})
    let a=null
    if(a)
    console.log("lds")
    else
    console.log("lsdjl")
    if(result){
     let savedData=await book.create(data)
       return res.send({added:savedData})
    }
   else{
         res.send({msg:"invalid author id"})
    }

}
module.exports.create=create
module.exports.createBook=createBook