  const User = require("../Model/user")

const login=(req,res)=>{
    res.render('login');
};

const signup=(req,res)=>{
    res.render('signup');
};

const createUser=async(req,res)=>{
    try {
        const { email } = req.body;
        let isExists = await User.findOne({ email: email });
        if (isExists) {
          return res.send("users already Exists");
        } else {
          let user = await User.create(req.body);
          return res.status(201).json(user);
        }
      } catch (error) {
        res.status(500).json({ error: error });
      }
};

const getUserByID=async(req,res)=>{
    let {id}=req.params;
    let data=await User.findById(id);
    res.send(data);
};

const getUser=async(req,res)=>{
    let data=await User.find(); 
    res.send(data);
};

const updateUser=async(req,res)=>{
    let {id}=req.params;
    let data=await User.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
};

const deleteUser=async(req,res)=>{
    let {id}=req.params;
    let data=await User.findByIdAndDelete(id);
    res.send(data);
};

const loginUser=async(req,res)=>{
  const {email ,password}=req.body;
  let isExist= await User.findOne({email:email});

  if(!isExist){
    return res.send("User not found...");
  }

  if(isExist.password!=password){
    return res.send("Invalid password...");
  }
  return res.send("Loggd In...");
};

module.exports={createUser,getUserByID,getUser,updateUser,deleteUser,login,signup,loginUser}; 