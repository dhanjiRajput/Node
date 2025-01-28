const User = require("../Models/user_model")

exports.createAdmin=async(req,res)=>{
    const admin=await User.create(req.body);
    res.status(201).json({admin});
}

exports.createTeacher=async(req,res)=>{
    const teacher=await User.create(req.body);
    res.status(201).json({teacher});
};

exports.createStudent=async(req,res)=>{
    const student=await User.create(req.body);
    res.status(201).json({student});
};

exports.getUsers=async(req,res)=>{
    const users=await User.find({});
    res.json(users);
};