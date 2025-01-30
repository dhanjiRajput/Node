const userService=require("../Service/user_service");

exports.userSignup=async(req,res)=>{
    try {
        const user=await userService.createUser(req.body);
        return res.send(user);
    } catch (error) {
        return res.status(404).send({message:error.message});
    }
};