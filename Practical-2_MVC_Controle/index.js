const express=require("express");
require("dotenv").config();
const dbconnect = require("./config/database");
const routemethod = require("./routes/method");
const app= express();
app.use(express.json());



app.use("/student",routemethod);

const PORT=process.env.PORT || 8090;
app.listen(8090,()=>{
    console.log("Server Started on port No. " + PORT);
    dbconnect();
});