const mongoose=require('mongoose')
//const author = require('./author')
const ObjectId=mongoose.Schema.ObjectId

const bookschema=mongoose.Schema({
    name:String,
	authorid:{
            type:ObjectId,
            ref:"newAuthor"
        },
	price:Number,
    isHardCover:{
        type:Boolean,
        default:false
    },
	ratings:Number,
    publisherid:{
        type:ObjectId,
        ref:"newPublisher"
    }
	},{timestamp:true});

module.exports=mongoose.model("newBook",bookschema)