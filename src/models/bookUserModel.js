//const { default: mongoose } = require("mongoose");

const mongoose= require('mongoose');

const bookSchema=new mongoose.Schema({
    bookName:String, 
    authorName:String, 
    category:String,
    year:Number,
},{timestamps:true});

module.exports=mongoose.model("Bookuser",bookSchema)