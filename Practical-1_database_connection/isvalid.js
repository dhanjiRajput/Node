const isvalid=(req,res,next) => {
     let {email,password,username} = req.body;

     if(!email || !password || !username){
        res.send("Insufficient Data......");
     }else{
        next();
     }
};

module.exports=isvalid;