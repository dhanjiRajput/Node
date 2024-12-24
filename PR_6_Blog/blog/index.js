const express = require('express');
const dbconnect = require('./config/db');
const cookies=require("cookie-parser");
const Api_Method = require('./Routes/user.routes');
const path = require('path');
const app = express();
require("dotenv").config();
app.use(cookies());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set("Views",path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"Public")));

app.use("/user",Api_Method);

const PORT=process.env.PORT||8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});