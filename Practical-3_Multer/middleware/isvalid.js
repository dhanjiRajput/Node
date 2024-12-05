const isvalid=(req,res,next)=>{
     let {title,price,description,category} = req.body;

     if(!title || !price || !description || !category){
        res.send("Insufficient information.....");
     }else{
        next();
     }
};

module.exports =isvalid;