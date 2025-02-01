const {Router}=require("express");
const userRoutes=Router();
const userController=require("../Controllers/user_controller");

userRoutes.post("/signup",userController.userSignup);
userRoutes.post("/login",userController.userLogin);
userRoutes.patch("/:userId",userController.updateUser);
userRoutes.delete("/:userId",userController.blockUser);
userRoutes.get("/",userController.getUsers);
userRoutes.get("/:userId",userController.getUserById);
userRoutes.get("/",userController.getUserByQuery);

module.exports=userRoutes;