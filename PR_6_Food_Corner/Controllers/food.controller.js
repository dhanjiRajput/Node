const Food = require("../Models/food.model")

const getfoodpage=(req,res)=>{
    res.render('addfood');
};

const getFoods=async(req,res)=>{
    try {
        let food=await Food.find();
        res.status(200).send(food);
    } catch (error) {
        res.status(500).send({message:"Error retrieving food",error})
    }
};

const addfood=async(req,res)=>{
    try {
        let {role}=req.cookies;
        if(role!="Admin"){
            return res.status(401).send("Unauthorized Access");
        } else{
            let food=await Food.create(req.body);
            res.status(200).send(food);
        }
    } catch (error) {
        res.status(500).send({message:"Error adding food",error})
    }
};



const updateFood=async(req,res)=>{
    try {
        let {role}=req.cookies;
        if(role!="Admin"){
            return res.status(401).send("Unauthorized Access");
        } else{
            let {id}=req.params;
            let food=await Food.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).send(food);
        }
    } catch (error) {
        res.status(500).send({message:"Error adding food",error})
    }
};


module.exports ={addfood,getFoods,updateFood,getfoodpage};
