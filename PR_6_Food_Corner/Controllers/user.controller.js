const User = require("../Models/user.model");

const signupPage=(req,res)=>{
    res.render("signup");
};

const loginPage=(req,res)=>{
    res.render("login");
};


const createUser=async(req,res)=>{
    try {
        let {email}=req.body;
        let isexist=await User.findOne({email:email});
    
        if(isexist){
            return res.status(400).json({message:"Email already exists"});
        }else{
            let user=await User.create(req.body);
            res.status(201).json(user);
        }
        res.cookie("name",isexist.name);
        res.cookie("user_id",isexist.id);
        res.cookie("role",isexist.role);
    } catch (error) {
        res.status(500).json({error: error});
    }
};


const loginUser=async(req,res)=>{
    try {
        let {email,password}=req.body;
        let isexist=await User.findOne({email:email});
    
        if(!isexist){
            return res.status(400).json({message:"Email does not exist"});
        }
    
        if(isexist.password !== password){
            return res.status(400).json({message:"Incorrect password"});
        }
    
        res.cookie("name",isexist.name);
        res.cookie("user_id",isexist.id);
        res.cookie("role",isexist.role);
        return res.status(200).json({message:"Logged in successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports={createUser,loginUser,signupPage,loginPage};