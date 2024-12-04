const express = require('express');
const database = require('./databse');
const user = require('./user');
const isvalid = require('./isvalid');
const app = express();
app.use(express.json());

app.get('/',async(req,res)=>{
    let data=await user.find();
    res.send(data);
});

app.get('/:id',async(req,res)=>{
    let {id} = req.params;
    const data=await user.findById(id);
    res.send(data);
});

app.post('/',isvalid,async(req,res)=>{
    let data=await user.create(req.body);
    res.send(data);
});

app.patch('/:id',async(req,res)=>{
    let {id} = req.params;
    let data=await user.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
});

app.delete('/:id',async(req,res)=>{
    let {id} = req.params;
    let data=await user.findByIdAndDelete(id);
    res.send(data);
});
app.listen(8098,()=>{
    console.log("Serve Stated...");
    database();
});