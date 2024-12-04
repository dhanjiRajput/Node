const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    img:String,
    title:String,
    price:Number,
    description:String,
    category:String,
});

const product=mongoose.model("product", productSchema);

module.exports=product;