const userRepository=require("../Repository/user_repo");
const { hashPassword, generateToken, comparePasword } = require("../Utils/helper");

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
    return token;
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

exports.getUsers=async()=>{
    const users=await userRepository.getUsers();
    return users;
};

exports.blockUser=async(id)=>{
    let user=await userRepository.getUserById(id);

    if(!user){
        throw new Error("User not found");
    }
    user=await userRepository.blockUser(id);
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

exports.getUserByQuery=async(query)=>{
    const users=await userRepository.getUserByQuery(query);
    return users;
};

exports.updateUser=async(id,data)=>{
    let user=await userRepository.getUserById(id);
    
    if(!user){
        throw new Error("User not found");
    }
    
    user=await userRepository.updateUser(id,data);
    return user;
};

exports.getUserById=async(id)=>{
    let user=await userRepository.getUserById(id);
    
    if(!user){
        throw new Error("User not found");
    }
    user=await userRepository.getUserById(id);
    return user;
};

