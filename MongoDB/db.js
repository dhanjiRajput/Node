const mongoose=require('mongoose');

const dbconnect=async()=>{
    await mongoose.connect("mongodb+srv://kidechadhanji:DKRajput@cluster0.kvyst.mongodb.net/");
    console.log("Database Connected.....");
};

module.exports=dbconnect