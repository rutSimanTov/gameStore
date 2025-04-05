import { model, Schema } from "mongoose"
const category=Schema({
//     name:{
// type:String
// // require:true
//     }
name:String
},{ versionKey: false })

export default model('category',category)

