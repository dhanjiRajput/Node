const userDetailRepository = require("../repository/details");

exports.getUserDetails = async (userId) => {
  try {
    let userDetail = await userDetailRepository.getByUserId(userId);
    return userDetail;
  } catch (error) {
    throw new Error("Couldn't get user details for user " + userId);
  }
};

exports.createUserDetails = async (payload) => {
  try {
    
    let userdata = await userDetailRepository.createDetail(payload);
    return userdata;
  } catch (error) {
    throw new Error("Couldn't create user details for user " + req.user.id);
  }
};

exports.updateUserDetails = async (id, payload) => {
  try {
    let UserDetails = await userDetailRepository.updateDetail(id, payload);
    return UserDetails;
  } catch (error) {
    throw new Error("Couldn't update user details for user " + id);
  }
};
