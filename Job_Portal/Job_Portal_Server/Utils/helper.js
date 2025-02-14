const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken = async (data) => {
  try {
    let token = await jwt.sign(data, process.env.key);
    return token;
  } catch (error) {
    throw new Error('Token Generation Failed')
  }
};

const hashPassword = async (password) => {
  try {
    let hashedpassword = await bcrypt.hash(password, 10);
    return hashedpassword;
  } catch (error) {
    throw new Error('Password Hashing Failed')
  }
};

const comparePasword = async (password, hash) => {
  try {
    let isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (error) {
    throw new Error('Password Comparison Failed')
  }
};

const decodeToken = async (token) => {
  try {
    const data = await jwt.verify(token, process.env.key);
    return data;
  } catch (error) {
    throw new Error('Token Verification Failed')
  }
};

module.exports = { generateToken, comparePasword, hashPassword, decodeToken };