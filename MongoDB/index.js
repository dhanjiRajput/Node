const express=require('express');
const dbconnect = require('./db');
const user = require('./user');
const app=express();
app.use(express.json());

app.get("/",async(req,res)=>{
    let data=await user.find();
    res.send(data);
})

app.post("/",async(req,res)=>{
    let data=await user.create(req.body);
    res.send(data);
})

app.listen(8092,()=>{
    console.log("Server Started......");
    dbconnect();
});