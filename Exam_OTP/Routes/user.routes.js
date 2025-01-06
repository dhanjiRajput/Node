const {Router}=require("express");
const { createuser, login, sendmail, sentotp } = require("../Controllers/user.controller");

const Api_Method=Router();

Api_Method.post("/signup",createuser);
Api_Method.post("/login",login);
Api_Method.post("/mail",sendmail);
Api_Method.post("/sentotp",sentotp);

module.exports = Api_Method;