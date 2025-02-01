const userService=require("../Service/user_service");

exports.userSignup=async(req,res)=>{
    try {
        let user=await userService.createUser(req.body);
        return res.send({token:user});
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.userLogin=async(req,res)=>{
    try {
        let user=await userService.loginUser(req.body);
        return res.send({token:user});
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.updateUser=async(req,res)=>{
    let {userId}=req.params;
    try {
        let user=await userService.updateUser(userId,req.body);
        return res.send(user);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.getUsers=async(req,res)=>{
    try {
        let users=await userService.getUsers();
        return res.send(users);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.deleteUser=async(req,res)=>{
    let {userId}=req.params;
    try {
        let user=await userService.deleteUser(userId);
        return res.send(user);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.getUserByQuery=async(req,res)=>{
    try {
        let users=await userService.getUserByQuery(req.query);
        return res.send(users);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.getUserById=async(req,res)=>{
    let {userId}=req.params;
    try {
        let user=await userService.getUserById(userId);
        return res.send(user);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};

exports.blockUser=async(req,res)=>{
    let {userId}=req.params;
    try {
        let user=await userService.blockUser(userId);
        return res.send(user);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
};