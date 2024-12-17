
const isvalidLogin=async(req,res,next)=>{
    try {
        let {username,password}=req.body;
    
        if(!username ||!password){
            return res.status(400).json({error: "all fields are required"});
        }else{
            next();
        }
    } catch (error) {
        res.status(500).json({error: error});
    }
};

module.exports=isvalidLogin