const {Router}=require('express');
const { createUser, loginUser } = require('../Controllers/user.controller');

const userRouter=Router();

// userRouter.get('/signup',signupPage);
// userRouter.get('/login',loginPage);
userRouter.post('/',createUser);
userRouter.post('/login',loginUser);

module.exports=userRouter;