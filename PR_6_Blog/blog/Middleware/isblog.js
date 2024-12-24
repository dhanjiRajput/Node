const isblog=(req,res,next)=>{
    const {title,image,category,content}=req.boy;

    if(!title ||!image ||!category ||!content){
        return res.status(400).json({message: "All fields are required"});
    }else{
        next();
    }
};

module.exports=isblog;