const express=require('express');
const dbconnect = require('./Config/database');
const Api_Method = require('./Routes/method');
const app=express();
require("dotenv").config();
app.use(express.json());

app.use("/",Api_Method);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});