
const isLoggedIn =(req,res,next) => {
    // let {username}=req.cookies;
    if(req.isAuthenticated() && req.user){
        next();
    }
    else{
        res.redirect("/user/login");
    }
}

module.exports ={isLoggedIn};