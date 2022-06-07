//const { default: mongoose } = require("mongoose");

const mongoose= require('mongoose');

const bookSchema2=new mongoose.Schema({
    bookName:{type:String,required:true}, 
    authorName:String, 
    bookprice:{indianprice:String,europeanprice:String},
    tags:[String],
    totalPages:Number,
    stockAvailable:Boolean,
    year:Number
},{timestamps:true});

module.exports=mongoose.model("Bookuser",bookSchema2)