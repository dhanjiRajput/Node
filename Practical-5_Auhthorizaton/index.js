const express = require('express');
const dbconnect = require('./Config/database');
const app = express();
const path = require('path');
const router = require('./Routes/method');
require("dotenv").config();
app.use(express.json());

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"Public")));

app.get("/user",async(req,res)=>{
    res.render("index");
});

app.use("/user",router);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log("Server Started on port ",PORT);
    dbconnect();
});

