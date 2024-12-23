const {Routes}=require('express');
const { createUser } = require('../Controllers/user.controller');
const passport = require('passport');

const Api_Method=Routes();

Api_Method.post("/signup",createUser);
Api_Method.post("/login",passport.authenticate("local"),(req,res)=>{
    res.send("Logged In....");
});