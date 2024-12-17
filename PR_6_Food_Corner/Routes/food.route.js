const {Router}=require('express');
const { addfood, getFoods, updateFood, getfoodpage } = require('../Controllers/food.controller');
const { isLoggedIn } = require('../Middleware/islogin');

const foodRouter=Router();

foodRouter.get("/",getfoodpage);
foodRouter.post("/addfood",isLoggedIn,addfood);
foodRouter.get("/",isLoggedIn,getFoods);
foodRouter.patch("/:id",isLoggedIn,updateFood);

module.exports=foodRouter;