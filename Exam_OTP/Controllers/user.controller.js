const User = require("../Model/user.model");
const sendigmail = require("../Service/mailservice");


const signuppage=(req,res)=>{
    res.render("signup");
};

const loginpage=async(req,res)=>{
    res.render("login");
};

const createuser=async (req, res) => {
    const { name, email, password } = req.body;

    const isexist=await User.findOne({email:email});

    if (isexist) {
        return res.status(400).json({ message: "Email already exist" });
    }else{
        let has=await bcrypt.hash(password,10);
        req.body.password = has;
        const user=await User.create(req.body);
        res.send(user);
    }
};

const login=async(req,res)=>{
    
    const user=await User.findOne({email:email});

    if(!user){
        return res.status(404).json({ message:"User not found" });
    }

    const match=await bcrypt.compare(password,user.password);

    if(!match){
        return res.status(404).json({ message:"Invalid Credentials" });
    }

    res.json("Success");
};

const sendmail=async()=>{
    const {to,subject,text}=req.body;

    await sendigmail(to,subject,text);
    res.send("mail to " + to);
}

let otps=new Map();
const sentotp=async(req,res)=>{
    const {email}=req.body;
    const otp=Math.floor(Math.random()*900000)+100000;

    const isexist=await User.findOne({email:email});

    if(!isexist){
        return res.status(404).json({ message:"User not found" });
    }

    otps.set(Number(otp),email);
    await sendigmail(email,"OTP",otp);
    res.send("suceess");
};

const verifyotp=async(req,res)=>{
    const {otp,password}=req.body;

    const email=otps.get(Number(otp));

    if(!email){
        return res.status(404).json({ message:"OTP Not Found" });
    }

    const data=await User.findOne({email:email});
    data.password=await bcrypt.hash(password,10);

    data.save();
}
module.exports = {createuser,login,sendmail,verifyotp,sentotp};