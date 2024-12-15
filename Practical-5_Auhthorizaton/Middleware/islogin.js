const isLoggedIn =(req,res,next) => {
    let {username}=req.cookies
    if(username){
        next();
    }
    else{
        res.redirect("/user/login");
    }
}

module.exports ={isLoggedIn};