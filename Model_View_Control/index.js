const express=require('express');
const dbconnection = require('./config/db');
const userRoute = require('./routes/user_routes');

const app=express();

app.use(express.json());

app.use("/user",userRoute);

app.listen(8091,()=>{
    console.log("server Started....on Port No. 8090..");
    dbconnection();
});