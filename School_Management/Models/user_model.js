const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    role:{type:String,enum:["admin","teacher","student"]},
    assignedTeachers:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    assignedStudents:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
});

const User=mongoose.model('User', userSchema);
module.exports = User;