const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    name:String,
    couse:String,
    grno:String,
    mobile:Number,
});

const Student=mongoose.model('Student',studentSchema);
module.exports =Student;