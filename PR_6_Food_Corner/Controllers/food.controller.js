const Food = require("../Models/food.model")

const addfood=async(req,res)=>{
    let {role}=req.cookies;
    if(role!="Admin"){
        return res.status(401).send("Unauthorized Access");
    } else{
        let food=await Food.create(req.body);
        res.send(food);
    }
};

const getFoods=async(req,res)=>{
    let foods=await Food.find();
    res.send(foods);
};

const updateFood=async(req,res)=>{
    let {role}=req.cookies;
    if(role!="Admin"){
        return res.status(401).send("Unauthorized Access");
    } else{
        let {id}=req.params;
        let food=await Food.findByIdAndUpdate(id,req.body,{new:true});
        res.send(food);
    }
};

module.exports ={addfood,getFoods,updateFood};
