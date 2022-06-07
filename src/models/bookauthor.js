const mongoose=require('mongoose')
const author = require('./author')

const bookschema=mongoose.Schema({
    author_id:Number,
    name:String,
    price:Number,
    ratings:String
},{timestamp:true});

module.exports=mongoose.model("Book",bookschema)