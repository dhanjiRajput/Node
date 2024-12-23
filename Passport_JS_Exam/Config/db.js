const mongoose = require('mongoose');
require("dotenv").config();


const DB_URL=process.env.DB_URL;
const dbconnect=async()=>{
    await mongoose.connect(DB_URL);
    console.log("Database connection established Sucessfully...");
};

module.exports=dbconnect;