const {Router} =require("express");
const { getUser, userSignup, userLogin, deleteUser } = require("../Controllers/user.controller");
const isvalidSignup = require("../Middlewares/isvalid.signup");
const isvalidLogin = require("../Middlewares/isvalid.login");

const userRouter = Router();

userRouter.post("/signup",isvalidSignup,userSignup);
userRouter.post("/login",isvalidLogin,userLogin);
userRouter.delete("/delete/:id",deleteUser);

module.exports = userRouter;
