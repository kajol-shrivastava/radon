const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
   name:String,
   category:String,
   price:Number

},{timestamp:true});

module.exports=mongoose.model("Product",productSchema)