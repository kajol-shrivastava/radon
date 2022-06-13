const author = require("../models/author")
const bookauthor = require("../models/bookauthor")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allautor= await author.find({age:{$gt:50}})
    let allbook=await bookauthor.find({ratings:{$gt:4}})
    console.log(allautor)
    console.log(allbook)
    let allUsers=allautor.filter(ele=>allbook.some(item=>item.author_id===ele.author_id))
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData