const {Router}=require('express');
const { getUser, getUserByID, createUser, updateUser, deleteUser, login, signup, loginUser, sendMail ,sentotp} = require('../Controller/routes_method');
const passport = require('passport');

const Api_Method=Router();

Api_Method.get("/login",login);
Api_Method.get("/signup",signup);

Api_Method.get("/",getUser);
Api_Method.get(":id",getUserByID);
Api_Method.post("/",createUser);
Api_Method.patch("/:id",updateUser);
Api_Method.delete("/:id",deleteUser);
// Api_Method.post("/login",loginUser);
Api_Method.post("/login",passport.authenticate("local"),(req,res)=>{
    res.send("Loggd In...");
});

Api_Method.post("/mail",sendMail);
Api_Method.post("/sentotp",sentotp);

module.exports=Api_Method;