const {Router}=require("express");
const UserDetailsController=require("../Controllers/user_details_controller");
const userDetailsRoutes=Router();

userDetailsRoutes.get("user/:userId",UserDetailsController.getDetailsById);
userDetailsRoutes.post("/",UserDetailsController.createDetails);
userDetailsRoutes.patch("/:id",UserDetailsController.updateDetails);

module.exports=userDetailsRoutes;