
const isvalidSignup=async(req,res,next)=>{
    try {
        let {email,password,username}=req.body;
    
        if(!email ||!password ||!username){
            return res.status(400).json({error: "all fields are required"});
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports=isvalidSignup