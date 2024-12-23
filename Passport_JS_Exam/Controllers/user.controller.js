const User = require("../Models/user.model");

const createUser=async(req,res)=>{
    try {
        const { email,password } = req.body;
        let isExists = await User.findOne({ email: email});
        if (isExists) {
          return res.send("users already Exists");
        } else {
          let hashedPassword = await bcrypt.hash(password, 10);
          req.body.password = hashedPassword;
          let user = await User.create(req.body);
          return res.status(201).json(user);
        }
      } catch (error) {
        res.status(500).json({ error: error });
      }
};

module.exports = {createUser};