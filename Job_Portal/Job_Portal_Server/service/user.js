const userRepository = require("../repository/user");
const {
  hashPassword,
  genereateToken,
  compare,
  decodeToken,
} = require("../utils/helper");
const sendMail = require("../utils/mail");
const userDetailService = require("./details");

let map = new Map();
exports.createUser = async (data) => {
  let user = await userRepository.getUserByEmail(data.email);
  if (user) {
    throw new Error("User already exists");
  }
  let hash = await hashPassword(data.password);
  data.password = hash;
  user = await userRepository.register(data);

  let token = await genereateToken({
    email: user.email,
    id: user.id,
    role: user.role,
    name: user.name,
  });
  let otp = Math.round(Math.random() * 10000);
  map.set(token, otp);
  let url = `<div> <a href=http://localhost:8091/api/v1/users/verify/${token}/${otp} > click to verify </a> </div>`;
  await sendMail(user.email, "verify", url);
  return token;
};

exports.verifyEmail = async (token, otp) => {
  let userOtp = map.get(token);
  if (userOtp == otp) {
    try {
      let user = await decodeToken(token);
      user = await userRepository.updateUser(user.id, { isVerified: true });
      return user;
    } catch (error) {
      throw new Error("Could not decode token");
    }
  } else {
    throw new Error("Invalid otp");
  }
};
exports.login = async (data) => {
  let user = await userRepository.getUserByEmail(data.email);
  if (!user) {
    throw new Error("User not exists");
  }
  let isMatch = await compare(user.password, data.password);
  if (!isMatch) {
    throw new Error("invalid password");
  }
  let token = await genereateToken({
    email: user.email,
    id: user.id,
    role: user.role,
    name: user.name,
  });

  return token;
};

exports.updateUser = async (id, data) => {
  let user = await userRepository.getUserById(id);

  if (!user) {
    throw new Error("invalid id");
  }
  user = await userRepository.updateUser(id, data);
  return user;
};

exports.deleteUser = async (id) => {
  let user = await userRepository.getUserById(id);
  if (!user) {
    throw new Error("invalid id");
  }
  user = await userRepository.deleteUser(id);
  return user;
};

exports.getUserById = async (id) => {
  let user = await userRepository.getUserById(id);
  let details = await userDetailService.getUserDetails(id);
  if (!user) {
    throw new Error("invalid id");
  }
  return {
    user,
    details,
  };
};

exports.findUserByQuery = async (query) => {
  let user = await userRepository.getUserByQuery(query);
  return user;
};

exports.getAllUSer = async () => {
  let users = await userRepository.getUsers();
  return users;
};
