const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    name:String,
    course:String,
    grno:String,
    mobile:Number,
});

const Student=mongoose.model('Student',studentSchema);
module.exports =Student;