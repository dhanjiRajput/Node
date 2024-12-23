const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    username,
    password,
    email,
    role: {
        type: String,
        enum: ["user", "admin"],   // Define allowed roles
        default: "user",           // Default role is 'user'
    }
});

const User=mongoose.model('User', userSchema);
module.exports=User;