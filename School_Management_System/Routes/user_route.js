const {Router}=require('express');
const createController=require("../Controllers/user_controller");

const userRouter=Router();

userRouter.post("/admin",createController.createAdmin);
userRouter.post("/teacher",createController.createTeacher);
userRouter.post("/student",createController.createStudent);
userRouter.get("/",createController.getUsers);

module.exports=userRouter;