const isvalid=(req,res,next)=>{
    let {email,password,username}=req.body;
    if(!email || !password ||!username){
        res.send("Invalid Data......");
    }else{
        next();
    }
};

module.exports=isvalid