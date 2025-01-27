const {Router}=require("express");
const { createUser, viewUser, assignTeacher, viewAssignedStudent, viewAssignedTeacher } = require("../Controllers/user_controller");

const userRouter=Router();

userRouter.post("/admin",createUser);
userRouter.get("/admin/view",viewUser);
userRouter.post("/admin/assignTeacher",assignTeacher);
userRouter.get("/student/:id",viewAssignedStudent);
userRouter.get("/teacher/:id",viewAssignedTeacher);

module.exports=userRouter;