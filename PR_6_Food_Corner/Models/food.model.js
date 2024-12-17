const mongoose = require('mongoose');

const foodSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    createdBy:String,
});

const Food=mongoose.model('Food',foodSchema);
module.exports =Food;
