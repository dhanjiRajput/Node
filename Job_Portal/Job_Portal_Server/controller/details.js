const userDetailService = require("../service/details");
exports.createUser = async (req, res) => {
  try {
    let user = req.user.id;
    req.body.user = user;
    let userDetail = await userDetailService.createUserDetails(req.body);
    res.send(userDetail);
  } catch (error) {
    res.send({ error: error });
  }
};

exports.updateUser = async (req, res) => {
  let { id } = req.params;
  try {
    let userDetail = await userDetailService.updateUser(id, req.body);
    res.send({ userDetail: userDetail });
  } catch (error) {
    res.send({ error: error });
  }
};

exports.getUserDetailsByUserId = async (req, res) => {
  let { userId } = req.params;
  try {
    let userDetail = await userDetailService.getUserDetails(userId);
    res.send({ userDetail: userDetail });
  } catch (error) {
    res.send({ error: error });
  }
};
