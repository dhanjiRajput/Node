const user = require("../model/user")

const getuser=async(req,res)=>{
    let data=await user.find();
    res.send(data);
};

const postuser=async(req,res)=>{
    let data=await user.create(req.body);
    res.send(data);
};

const updateuser=("/:id",async(req,res)=>{
    let {id}=req.params;
    let data=await user.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
});

const deleteuser=("/:id",async(req,res)=>{
    let {id}=req.params;
    let data=await user.findByIdAndDelete(id);
    res.send(data);
});

module.exports={getuser,postuser,updateuser,deleteuser};