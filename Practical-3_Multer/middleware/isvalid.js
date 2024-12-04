const isvalid=(req,res,next)=>{
     let {img,title,price,description,category} = req.body;

     if(!img || !title || !price || !description || !category){
        res.send("Insufficient information.....");
     }else{
        next();
     }
};

module.exports =isvalid;