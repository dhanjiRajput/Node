const userRepository=require("../Repository/user_repo");
const { hashPassword, generateToken } = require("../Utils/helper");

exports.createUser=async(data)=>{
    let user=await userRepository.getUserByEmail(data.email);
    if(user){
        throw new Error("User already exists");
    }
    let has=await hashPassword(data.password);
    data.password=has;
    user=await userRepository.register(data);

    let token=await generateToken({
        id:user._id,
        email:user.email,
        username:user.username,
        role:user.role,
    });

    return token;
};