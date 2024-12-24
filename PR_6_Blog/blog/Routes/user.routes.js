const {Router}=require("express");
const { signupPage, loginPage, createUser, loginUser, deleteUser } = require("../Controllers/user.controller");
const { isvalid } = require("../Middleware/isvalid");

const Api_Method=Router();

Api_Method.get("/signup",signupPage);
Api_Method.get("/login",loginPage);
Api_Method.post("/signup",isvalid,createUser);
Api_Method.post("/login",isvalid,loginUser);
Api_Method.delete("/delete",deleteUser);

module.exports=Api_Method;