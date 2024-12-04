const mongoose=require('mongoose');

const database=async()=>{
    await mongoose.connect("mongodb://localhost:27017/student");
    console.log("Database connection established");   
}

module.exports=database;