const mongoose =  require("mongoose")
const Schema =   mongoose.Schema

 const  trackSchema =  new Schema({
       name:{
             type:String,
            required:[true,'name is required']
       },
       genre:{
            type:String,
       },
       file_path:{
             type:String
       },
       Artwork_path:{
            type:String
       },
       Artist:{
            type:String
       },

       createAt:{
            type:Date,
            default: Date().now
       }
 

 })


 module.exports  = mongoose.model('tracks',trackSchema)