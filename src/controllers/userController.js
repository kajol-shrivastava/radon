const user=require("../models/user")

const createUser=async function(req,res){
    const data=req.body
    const savedData=await user.create(data)
    res.send({added:savedData})
}

module.exports.createUser=createUser