const author = require('../models/author')
const book=require('../models/book')

const create= async function(req,res){
    const data=req.body
    const savedData=await author.create(data)
    res.send({added:savedData})
}
 



   module.exports.create=create
