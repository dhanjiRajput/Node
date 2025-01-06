const mongoose = require('mongoose');

const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/otp");
    console.log("database connection established");
};

module.exports=dbconnect;