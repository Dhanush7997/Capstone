//import mongoose
const mongoose = require('mongoose')
//create schema
const productSchema = new mongoose.Schema({
        P_IMG: String,
        p_name: String,
        P_sym: String,
        P_cost : Number,
        P_cate: String,
        P_ID: Number,
       P_DESC: String

})
module.exports = mongoose.model("Product", productSchema)