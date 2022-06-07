const mongoose=require('mongoose')

const authorscema= mongoose.Schema({
    author_id:Number,
    author_name:String,
    age:Number,
    address:String,
},{timestamps:true});

module.exports=mongoose.model("author",authorscema)