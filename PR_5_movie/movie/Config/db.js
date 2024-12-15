const mongoose = require('mongoose');
require("dotenv").config();


const DB_URL=process.env.DB_URL;
const dbconnect=async()=>{
    await mongoose.connect(DB_URL);
    console.log("Dtabase establish successfully...");
}

module.exports=dbconnect;