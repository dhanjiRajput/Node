const {Router}=require("express");
const userRoutes=Router();
const userController=require("../Controllers/user_controller");

userRoutes.post("/signup",userController.userSignup);
userRoutes.post("/login",userController.userLogin);
userRoutes.patch("/:userId",userController.updateUser);
userRoutes.delete("/:userId",userController.deleteUser);
userRoutes.get("/info/:userId",userController.getUserById);
userRoutes.get("/",userController.getUserByQuery);
userRoutes.get("/verify/:token/:otp", userController.verifyEmail);

module.exports=userRoutes;