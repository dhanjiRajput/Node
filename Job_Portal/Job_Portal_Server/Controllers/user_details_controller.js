const UserDetailService=require("../Service/user_details_service");

exports.createDetails=async(req,res)=>{
    try {
        let user=req.user.id;
        req.body.user=user;
    
        let details=await UserDetailService.createDetails(req.body);
        res.send(details);
    } catch (error) {
        res.send({error: error.message});
    }
};

exports.getDetailsById=async(req,res)=>{
    try {
        let {userId}=req.params;
        let details=await UserDetailService.getUserDetails(userId);
        res.send(details);
    } catch (error) {
        res.send({error: error.message});
    }
};

exports.updateDetails=async(req,res)=>{
    try {
        let {userId}=req.params;
        let details=await UserDetailService.updateUserDetails(userId,req.body);
        res.send(details);
    } catch (error) {
        res.send({error: error.message});
    }
};