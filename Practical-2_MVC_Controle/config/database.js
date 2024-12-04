const mongoose = require('mongoose');
require("dotenv").config();


const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/stud");
    console.log("database connection established");
}

module.exports=dbconnect;