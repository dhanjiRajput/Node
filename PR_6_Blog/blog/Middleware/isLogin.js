const isLoggedin=(req,res,next)=>{
    let {username}=req.cookies;

    if(username){
        next();
    }else{
        res.redirect('/user/login');
    }
};