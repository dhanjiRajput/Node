
const isvalidLogin=async(req,res,next)=>{
    try {
        let {email,password}=req.body;
    
        if(!email ||!password){
            return res.status(400).json({error: "all fields are required"});
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports=isvalidLogin