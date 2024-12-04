const Student = require("../model/student");

const getAllData = async(req,res)=>{
    try {
        const data= await Student.find();
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

const getById = async(req,res)=>{
    try {
        const {id} = req.params;
        const data= await Student.findById(id);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({err:error.message});
    }
};

const createData = async(req,res)=>{
    try {
        const data= await Student.create(req.body); 
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({err:error.message});
    }
};

const updateData = async(req,res)=>{
    try {
        const {id} = req.params;
        const data= await Student.getByIdAndUpdate(id,req.body,{new:true});
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({err:error.message}); 
    }
};

const deleteData = async(req,res)=>{
    try {
        const {id} = req.params;
        const data= await Student.findByIdAndDelete(id);
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send({err:error.message});
    }
};

module.exports ={getById,createData,updateData,deleteData,getAllData};