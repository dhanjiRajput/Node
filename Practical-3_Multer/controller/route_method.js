const product = require("../model/product")

const getAllData=async(req,res)=>{
try {
        const data= await product.find();
        res.status(200).send(data);
} catch (error) {
    res.status(500).send({err:error.message});
}
}

const getProductById=async(req,res)=>{                                                                                              
try {
        const {id}=req.params;
        const data= await product.findById(id);
        res.status(200).send(data);
} catch (error) {
    res.status(500).send({err:error.message});
}
}; 

const createProduct=async(req,res)=>{
    console.log(req.file);

  if (req.file) {
    req.body.img = req.file.path;
  }
try {
        const data= await product.create(req.body);
        res.status(200).send(data);
} catch (error) {
    res.status(500).send({err:error.message});
}
};

const updateProduct=async(req,res)=>{
try {
        const {id}=req.params;
        const data= await product.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).send(data);
} catch (error) {
    res.status(500).send({err:error.message});
}
};

const deleteProduct=async(req,res)=>{
try {
        const {id}=req.params;
        const data=await product.findByIdAndDelete(id);
        res.status(200).send(data);
} catch (error) {
    res.status(500).send({err:error.message});
}
};

module.exports={getAllData,getProductById,createProduct,updateProduct,deleteProduct};