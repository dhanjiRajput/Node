const {Router}=require('express');
const { addfood, getFoods, updateFood } = require('../Controllers/food.controller');
const { isLoggedIn } = require('../Middleware/islogin');

const foodRouter=Router();

foodRouter.post("/",isLoggedIn,addfood);
foodRouter.get("/",isLoggedIn,getFoods);
foodRouter.patch("/:id",isLoggedIn,updateFood);

module.exports=foodRouter;