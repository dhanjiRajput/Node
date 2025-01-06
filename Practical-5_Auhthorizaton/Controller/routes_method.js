  const User = require("../Model/user");
  const bcrypt = require("bcrypt");
const sendingMail = require("../Services/mail.service");

const login=(req,res)=>{
    res.render('login');
};

const signup=(req,res)=>{
    res.render('signup');
};

const createUser=async(req,res)=>{
    try {
        const { email,password } = req.body;
        let isExists = await User.findOne({ email: email });
        if (isExists) {
          return res.send("users already Exists");
        } else {
          let hashedPassword = await bcrypt.hash(password, 10);
          req.body.password = hashedPassword;
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
  const {email ,password,username}=req.body;
  let isExist= await User.findOne({email:email});

  if(!isExist){
    return res.send("User not found...");
  }

  const ismatched=await bcrypt.compare(password,isExist.password);
  if(!ismatched){
    return res.send("Invalid password...");
  }
  res.cookie('username', isExist.username);
  return res.send("Loggd In...");
};

const sendMail=async(req,res)=>{
  const {to,subject,content}=req.body;

  await sendingMail(to,subject,content);
  res.send("Mail Sent..."+to);
};
  
const sentotp = async (req, res) => {
  const { email } = req.body;

  let isExists = await User.findOne({ email: email });
  if (!isExists) {
    return res.send("user not found");
  }
  try {
    let otp = Math.round(Math.random() * 1000000);
   // otps.set(otp, email);

    let html = `<h1>OTP : ${otp}</h1>`;
    await sendingMail(email, "password reset", html);
   // res.redirect("/user/reset-password");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports={createUser,getUserByID,getUser,updateUser,deleteUser,login,signup,loginUser,sendMail,sentotp};