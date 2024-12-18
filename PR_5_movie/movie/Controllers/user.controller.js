const User = require("../Models/user.schema");


const userSignup=async(req,res)=>{
    let user=await User.create(req.body);
    return res.status(201).json(user);
};

const deleteUser = async(req,res)=>{
    try {
        let userId=req.params.id;
        let user=await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({message:"User deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const userLogin = async(req,res)=>{
    try {
        let {username,password}=req.body;
            
        let isExist =await User.findOne({username:username});

        if(!isExist){
            return res.status(401).json({error:"Invalid username or password"});
        }
    
        if(isExist.password !=password){
            return res.status(401).json({error:"Invalid username or password"});
        }
        return res.status(200).json({message:"Logged in successfully"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports={deleteUser,userLogin,userSignup};