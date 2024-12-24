const User = require("../Models/user.schema");

const signupPage=(req,res)=>{
    res.render("signup");
}

const loginPage=(req,res)=>{
    res.render("login");
}

const createUser=async(req,res)=>{

    try {
        const {email}=req.body;
    
        const isexist=await User.findOne({email:email});
    
        if(isexist){
            return res.status(400).json({message: isexist.username});
        } else{
            const newUser=new User(req.body);
            await newUser.save();
            res.json({ message: `Account created successfully ${req.body.username}` });
            res.cookie("username",isexist.username);
            res.cookie("role",isexist.role);
            res.cookie("userId",isexist._id);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
    
        const isexist=await User.findOne({email:email});
    
        if(!isexist){
            return res.status(400).json({message: "User not found"});
        }
    
        if(isexist.password!==password){
            return res.status(400).json({message: "Invalid Credentials"});
        }
    
        res.json({ message: `Welcome User ${isexist.username}`});
        res.cookie("username",isexist.username);
        res.cookie("role",isexist.role);
        res.cookie("userId",isexist._id);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteUser=async(req,res)=>{
    try {
        const {id}=req.params;
        const user=await User.findByIdAndDelete(id);
        res.json({ message: `user deleted ${user.username}` });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports={createUser,loginUser,signupPage,loginPage,deleteUser};