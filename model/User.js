const mongoose  = require("mongoose")
const userSchema = new mongoose.Schema({

u_id:Number,
u_name:String,
u_pwd:String,
u_u_email:String,
u_addr: String,
u_u_contact:String
})

module.exports = mongoose.model("users",userSchema)