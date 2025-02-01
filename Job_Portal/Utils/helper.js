const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken=async(data)=>{
   try {
     let token=await jwt.sign(data,process.env.key);
     return token;
   } catch (error) {
        throw new Error("Could not sign token: " + error);
   }
};

const hashPassword=async(password)=>{
        let hashedpassword=await bcrypt.hash(password,10);
        return hashedpassword;
};

const comparePasword=async(password,hash)=>{
    let isMatch=await bcrypt.compare(password,hash);
    return isMatch;
};

module.exports={generateToken,comparePasword,hashPassword};