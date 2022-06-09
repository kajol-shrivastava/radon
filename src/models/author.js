const mongoose=require('mongoose')

const authorscema= mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating: Number,

},{timestamps:true});

module.exports=mongoose.model("newAuthor",authorscema)