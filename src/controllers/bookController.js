const book=require("../models/book")
const author=require("../models/author")
const publisher=require("../models/publisher")
const { default: mongoose } = require("mongoose")

const creatbook=async function(req,res){
    const data=req.body
    console.log(data)
    console.log(data.publisherid)
   console.log(typeof(data.authorid))
    let checkaid=await author.findById(data.authorid)
    let checkpid=await publisher.findById(data.publisherid)
    if(data.authorid==""||data.publisherid==""){
        return res.send({msg:"id is mandatory"})
    }
    else if (checkaid==null){
        return res.send({msg:"please enter a vlaid author id"})
    }
    
    else if(checkpid==null){ 
        return res.send({msg:"please enter a vlaid publisher id"})
    }
        else{
            const savedData=await book.create(data)
            return res.send({added:savedData})
            
        }
    }

const getbooks=async function(req,res){
const savedData=await book.find().populate('authorid').populate('publisherid')
res.send({msg:savedData})
}

const updated_field=async function(req,res){
    const pub_id=await publisher.find({name:{$in:["HarperCollins","Penguin"]}})
    let savedData={}
     let i=1
   for (let x in pub_id){
    const saved=await book.updateMany({publisherid:pub_id[x]._id},{$set:{isHardCover:true}})
    const data= await book.find({publisherid:pub_id[x]._id}).populate('publisherid')
    savedData[i++]=data     }
    res.send({msg:savedData})
}

const updated_price=async function(req,res){
    const Data= await book.updateMany({ratings:{$gt:3.5}},{$set:{$inc:{price:10}}})
    const savedData=await book.find({ratings:{$gt:3.5}}).select({name:1,price:1,ratings:1,_id:0})
    res.send({msg:savedData})
}

module.exports.creatbook=creatbook
module.exports.getbooks=getbooks
module.exports.updated_field=updated_field
module.exports.updated_price=updated_price