const cretaeUser=async(req,res)=>{
    res.render('login');
}

const loginUser=async(req,res)=>{
    res.render('signup');
};

module.exports ={cretaeUser,loginUser};