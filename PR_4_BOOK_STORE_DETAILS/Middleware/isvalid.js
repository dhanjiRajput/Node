const isvalid=(req,res,next)=>{

    let {title,author,category,publicationYear,price,quantity,description,imageUrl}=req.body;

    if(!title,!author,!category,!publicationYear,!price,!quantity,!description,!imageUrl){
        res.status(404).send({message:"All Data are required"});
    }else{
        next();
    }
};

module.exports=isvalid;