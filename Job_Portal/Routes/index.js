const {Router}=require("express");
const userRoutes = require("./user_route");
const indexUser=Router();

indexUser.use("/user",userRoutes);

module.exports=indexUser;