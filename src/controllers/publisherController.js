const publisher=require("../models/publisher")

const createpublisher=async function(req,res){
    const data=req.body
    const savedData=await publisher.create(data)
    res.send({added:savedData})
}

module.exports.createpublisher=createpublisher