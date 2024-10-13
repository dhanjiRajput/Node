const express=require('express');
const app=express();

app.get("/node",(req,res)=>{
    res.send("Welcome to the Future.....");
});

app.listen(8091,()=>{
    console.log("Server Started.....");
});