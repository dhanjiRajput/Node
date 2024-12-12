const express=require('express');
const dbconnect = require('./Config/database');
const Api_Method = require('./Routes/method');
const isvalid = require('./Middleware/isvalid');
const app=express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.get("/",(req,res)=>{
    res.send("Welcome to the Book Store");
});

app.use("/books",isvalid,Api_Method);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log("Server listening on port",PORT);
    dbconnect();
});
