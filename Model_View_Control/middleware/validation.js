const isvalid=(req,res,next)=>{
    let {username,email,password}=req.body;

    if(!username || !email || !password){
        res.send("All Manadtory..");
    }else{
        next();
    }
}

module.exports=isvalid;