const express = require('express');
const dbconnect = require('./config/db');
const cookies=require("cookie-parser");
const app = express();
require("dotenv").config();
app.use(cookies());
app.use(express.urlencoded({extended: true}));                          



const PORT=process.env.PORT||8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});