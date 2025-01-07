const User=require("../Model/user.model");
const sendigmail = require("../Service/mailservice");
const bcrypt=require("bcrypt");

const signuppage = (req, res) => {
    res.render("signup");
};

const loginpage = async (req, res) => {
    res.render("login");
};

const otppage = async (req, res) => {
    res.render("otp");
};

const resetpage = async (req, res) => {
    res.render("reset");
};

const createuser = async (req, res) => {
   
    const { email ,password} = req.body;

    const isexist = await User.findOne({ email: email});

    if (isexist) {
        return res.status(400).json({ message: "Email already exist" });
    } else {

       let has=await bcrypt.hash(password,10);
       req.body.password = has;
       let user = await User.create(req.body);
       return res.status(201).json(user);
    }
};

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.send( "User not found" );
    }
    const ismatched=await bcrypt.compare(password,user.password);

    if(!ismatched){
        return res.send("Invalid Password");
    }
    return res.send("Logged In");
};


let otps = new Map();
const sentotp = async (req, res) => {
    const { email } = req.body;
    try {
        isExists = await User.findOne({ email: email });
        if (!isExists) {
            return res.status(400).json({ error: "User not found" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        otps.set(Number(otp), email);

        await sendigmail(email, "OTP", "Your OTP is: " + otp);
        return res.redirect("/otp");
    } catch (error) {
        res.send(error.message);
    }
};

const verifyotp = async (req, res) => {
    const { otp, password } = req.body;

    let data = otps.get(Number(otp));

    if (!data) {
        return res.status(400).json({ error: "Invalid OTP" });
    }
    const hash = await bcrypt.hash(password, 10);
    let user = await User.findOne({ email: data });
    user.password = hash;

    user.save();

    res.send("Password reset successfully");
}
module.exports = { createuser, login, verifyotp, sentotp, signuppage, loginpage, otppage ,resetpage};