const User = require("../Models/user_model");

exports.register=async(data)=>{
    const user=await User.create(data);
    return user;
};

exports.getUserByEmail=async(email)=>{
    const user=await User.findOne({email:email});
    return user;
};

exports.getUserById=async(id)=>{
    const user=await User.findById(id);
    return user;
};

exports.updateUser=async(data,id)=>{
    const user= await User.findByIdAndUpdate(id,data,{new:true});
    return user;
};

exports.getUsers=async()=>{
    const users=await User.find({});
    return users;
};

exports.deleteUser=async(id)=>{
    const user=await User.findByIdAndDelete(id);
    return user;
};

exports.getUserByQuery=async(query)=>{
    const users=await User.find(query);
    return users;
};