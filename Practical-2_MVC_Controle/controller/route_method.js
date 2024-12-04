const Student = require("../model/student");

const getAllData = async(req,res)=>{
    const data= await Student.find();
    res.send(data);
};

const getById = async(req,res)=>{
    const {id} = req.params;
    const data= await Student.findById(id);
    res.send(data);
};

const createData = async(req,res)=>{
    const data= await Student.create(req.body);
    res.send(data);
};

const updateData = async(req,res)=>{
    const {id} = req.params;
    const data= await Student.getByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
};

const deleteData = async(req,res)=>{
    const {id} = req.params;
    const data= await Student.findByIdAndDelete(id);
    res.send(data);
};

module.exports ={getById,createData,updateData,deleteData,getAllData};