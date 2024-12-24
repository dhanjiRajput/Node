const isvalid=(req,res,next)=>{
    const {email,password,username} = req.body;
    if(!email ||!password ||!username){
        return res.status(400).json({message: "All fields are required"});
    }else{
        next();
    }
};

module.exports={isvalid};