const mongoose = require('mongoose');
const { type } = require('os');

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    role:{type:String,enum:["admin","teacher","student"]},
    adminId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    studentId:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    teacherId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
});

const User=mongoose.model('User',userSchema);
module.exports=User;