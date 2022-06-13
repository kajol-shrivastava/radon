const mongoose=require('mongoose')
//const author = require('./author')
const ObjectId=mongoose.Schema.ObjectId

const orderschema=mongoose.Schema({
   
	userid:{
            type:ObjectId,
            ref:"Newuser"
        },
	 productid:{
        type:ObjectId,
        ref:"Product"
    },
    amount:{
        type:Number,
        default:0
          },
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
    date:String
	},{timestamp:true});

module.exports=mongoose.model("Order",orderschema)