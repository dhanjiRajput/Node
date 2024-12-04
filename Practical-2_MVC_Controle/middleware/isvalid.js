const isvalid=(req,res,next) =>{
    
    let {name,course,mobile,grno}=req.body;

    if(!name ||!course ||!mobile ||!grno){
        res.send("Insufficient Data....");
    }else{
        next();
    }
};

module.exports=isvalid;