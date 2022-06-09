const mongoose=require('mongoose')

const publisherSchema=mongoose.Schema({
    name:String,
headQuarter: String,

},{timestamp:true});

module.exports=mongoose.model("newPublisher",publisherSchema)