const multer=require('multer');

const upload=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
});

const uploadImage=multer({storage:upload});

module.exports=uploadImage;