const mongoose = require('mongoose');
require("dotenv").config();

const db_url=process.env.db_url;
const dbconnect=async()=>{
    await mongoose.connect(db_url);
    console.log('Connected to MongoDB');
};

module.exports=dbconnect;