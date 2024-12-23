const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const dbconnect = require('./Config/db');
const initializer = require('./Middleware/passportAuth');
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(session({secret: 'secret-key'}));
app.use(passport.initialize());
app.use(passport.session());

initializer(passport);

const PORT=process.env.PORT ||8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});