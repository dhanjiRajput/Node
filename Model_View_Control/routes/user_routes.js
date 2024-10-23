const {Router}=require('express');
const {getuser, postuser, updateuser, deleteuser } = require('../controller/user_controller');
const isvalid = require('../middleware/validation');

const userRoute=Router();

userRoute.get("/",getuser);
userRoute.post("/",isvalid,postuser);
userRoute.patch("/:id",updateuser);
userRoute.delete("/:id",deleteuser);

module.exports=userRoute;