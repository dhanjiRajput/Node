const mongoose = require('mongoose');
require("dotenv").config();


const url=process.env.url;
const dbconnect=async()=>{
    await mongoose.connect(url);
    console.log("Database connection established Successfully....");
};

module.exports=dbconnect;