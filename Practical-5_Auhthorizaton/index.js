const express=require('express');
const { dbconnect } = require('./Config/database');
const Api_Method = require('./Routes/method');
const app= express();
const path = require('path');
const cookies = require('cookie-parser');
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());


app.set('view engine', 'ejs');
app.set("Views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"Public")));

app.get("/",(req,res)=>{
    res.render('index');
});

app.use("/user",Api_Method);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbconnect();
});