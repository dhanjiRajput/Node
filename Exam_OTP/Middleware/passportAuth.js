const bcrypt=require('bcrypt');
const User = require('../Model/user.model');

const Localstrategy=require('passport-local').Strategy;

const initializer=(passport)=>{

    passport.use(new Localstrategy
        (
                {usernameField:"email"},async(email,password,done)=>{
                    let user=await User.findOne({email: email});

                    if(!user){
                        return done(null,false);
                    }

                    let ismatch=await bcrypt.compare();
            }
        )
    );
}

module.exports=initializer;