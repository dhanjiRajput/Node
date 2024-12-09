const {Router} =require("express");
const { cretaeUser, loginUser } = require("../Controller/routes_method");
const router=Router();

router.post("/",cretaeUser);
router.post("/",loginUser);

module.exports=router;