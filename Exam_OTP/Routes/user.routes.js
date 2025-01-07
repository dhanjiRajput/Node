const {Router}=require("express");
const { createuser, login, sentotp, loginpage, signuppage, otppage, resetpage, verifyotp } = require("../Controllers/user.controller");
const passport = require("passport");

const Api_Method=Router();

Api_Method.get("/signup",signuppage);
Api_Method.get("/login",loginpage);
Api_Method.get("/otp",otppage);
Api_Method.get("/reset",resetpage);

Api_Method.post("/signup",createuser);
Api_Method.post("/login",login);
Api_Method.post("/otp",sentotp);
Api_Method.post("/reset",verifyotp);

module.exports = Api_Method;