const UserDetailsRepo=require("../Repository/user_details_repo");

exports.createDetails=async(data)=>{
    try {
        let Details=await UserDetailsRepo.createDetails(data);
        return Details;
    } catch (error) {
        throw new Error("Couldn't create user details for user " + req.user.id);
    }
};

exports.getUserDetails=async(data)=>{
    try {
        let details=await UserDetailsRepo.getDetailsById(data);
        return details;
    } catch (error) {
        throw new Error("Couldn't get user details for user " + userId);
    }
};

exports.updateUserDetails=async(id,data)=>{
    try {
        let details=await UserDetailsRepo.updatedetails(id,data);
        return details;
    } catch (error) {
        throw new Error("Couldn't update user details for user " + id);
    }
};