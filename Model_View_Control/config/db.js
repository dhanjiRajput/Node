const mongoose=require('mongoose');
require("dotenv").config();

const dbconnection=async()=>{
    await mongoose.connect(process.env.db);
    console.log("Database Connected......");
}

module.exports=dbconnection;