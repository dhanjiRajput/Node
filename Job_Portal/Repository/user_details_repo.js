const UserDetails = require("../Models/user_details_model");


exports.createDetails=async(data)=>{
        let details=await UserDetails.create(data);
        return details;
};

exports.updatedetails=async(id,data)=>{
    let details=await UserDetails.findByIdAndUpdate(id,data,{new:true});
    return details;
};

exports.getDetailsById=async(id)=>{
    let details=await UserDetails.findOne({user:userId});
    return details;
};