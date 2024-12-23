const User = require("../Models/user.model");
const bcrypt = require("bcrypt");
const Localstrategy = require("passport-local").Strategy;
const initializer = (passport) => {

    passport.use(new Localstrategy
        (
            { usernameField: "email" }, async (email, password, done) => {

                try {
                    let user = await User.findOne({ email: email});
    
                    if (!user) {
                        return done(null, false);
                    }
    
                    let match = await bcrypt.compare(password,user.password);
    
                    if (!match) {
                        return done(null, false);
                    }
    
                    return done(null, user);
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    });
};

module.exports = initializer;