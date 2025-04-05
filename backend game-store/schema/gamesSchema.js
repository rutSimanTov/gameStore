import mongoose, { model, Schema } from "mongoose";
const games=Schema({
    name:String,
    categoryCode:{
        type:mongoose.Types.ObjectId,
        ref:'category'
    },
    price:Number,
    img:String,
    amount:Number
   
},{ versionKey: false })

export default model('games',games)
