const User = require("../Models/user.schema");

const createUser=async(req,res)=>{

    const {email,username}=req.body;

    const isexist=await User.findOne({email:email});

    if(isexist){
        return res.status(400).json({message: isexist.username});
    } else{
        const newUser=new User(req.body);
        await newUser.save();
        res.json({ message: `Account created successfully ${username}` });
    }
};

module.exports={createUser};