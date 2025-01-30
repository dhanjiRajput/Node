//In Utils we did Hshing and Token 

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken=async(data)=>{
    try {
        const token=await jwt.sign(data,process.env.key);
        return token;
    } catch (error) {
        throw new Error("Could not sign token"+error);
    }
};

const hashPassword=async(password)=>{
    const has=await bcrypt.hash(password,10);
    return has;
};

const compare=async(hash,password)=>{
    return bcrypt.compare(hash,password);
};

module.exports={generateToken, compare, hashPassword};