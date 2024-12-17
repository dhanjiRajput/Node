const isvalid=(req,res,next)=>{

    let {title,author,category,publicationYear,price,quantity,description,imageUrl}=req.body;

    if(!title,!author,!category,!publicationYear,!price,!quantity,!description,!imageUrl){
        return res.status(400).json({ message: 'All fields are required' });
    }else{
        next();
    }
};

module.exports=isvalid;