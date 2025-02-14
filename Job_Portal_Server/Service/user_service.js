const userRepository=require("../Repository/user_repo");
const sendMail = require("../Utils/email");
const { hashPassword, generateToken, comparePasword, decodeToken } = require("../Utils/helper");
const userDetailRepo=require("./user_details_service");

let map=new Map();
exports.createUser=async(data)=>{
    let user=await userRepository.getUserByEmail(data.email);

    if(user){
        throw new Error("User already exists");
    }

    let hashedPassword=await hashPassword(data.password);
    data.password=hashedPassword;

    user=await userRepository.register(data);

    let token=await generateToken({
        id:user._id,
        email:user.email,
        username:user.username,
        role:user.role
    });

    let otp=Math.round(Math.random()*1000);
    map.set(token,otp);
    let url=`<div> <a href=http://localhost:8090/api/v1/users/verify/${token}/${otp} > click to verify </a> </div>`;
    await sendMail(user.email,"verify",url);
    return token;
};

exports.verifyEmail=async(token,otp)=>{
    let userotp=map.get(token);

    if(userotp==otp){
        try {
            let user=await decodeToken(token);
            user=await userRepository.updateUser(user.id,{isVerified:true});
            return user;
        } catch (error) {
            throw new Error("Could not decode token");
        }
    }else{
        throw new Error("Invalid OTP");
    }
};

exports.loginUser=async(data)=>{
    let user=await userRepository.getUserByEmail(data.email);
    
    if(!user){
        throw new Error("User not found");
    }
    
    let isMatch=await comparePasword(data.password,user.password);
    
    if(!isMatch){
        throw new Error("Invalid password");
    }
    
    let token=await generateToken({
        id:user._id,
        email:user.email,
        username:user.username,
        role:user.role
    });
    return token;
};

exports.updateUser=async(id,data)=>{
    let user=await userRepository.getUserById(id);
    
    if(!user){
        throw new Error("User not found");
    }
    
    user=await userRepository.updateUser(id,data);
    return user;
};


exports.deleteUser=async(id)=>{
    let user=await userRepository.getUserById(id);

    if(!user){
        throw new Error("User not found");
    }
    user=await userRepository.deleteUser(id);
    return user;
};

exports.getUserById=async(id)=>{
    let user=await userRepository.getUserById(id);
    let details=await userDetailRepo.getUserDetails(id);
    
    if(!user){
        throw new Error("User not found");
    }
    
    return {user,details};
};

exports.getUserByQuery=async(query)=>{
    const users=await userRepository.getUserByQuery(query);
    return users;
};


exports.getAllUsers=async()=>{
    const users=await userRepository.getAllUsers();
    return users;
};
