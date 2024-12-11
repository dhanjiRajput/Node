const {Router}=require('express');
const { getUser, getUserByID, createUser, updateUser, deleteUser, login, signup, loginUser } = require('../Controller/routes_method');

const Api_Method=Router();

Api_Method.get("/login",login);
Api_Method.get("/signup",signup);

Api_Method.get("/",getUser);
Api_Method.get(":id",getUserByID);
Api_Method.post("/",createUser);
Api_Method.patch("/:id",updateUser);
Api_Method.delete("/:id",deleteUser);
Api_Method.post("/login",loginUser);

module.exports=Api_Method;
