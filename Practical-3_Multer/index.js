const express = require('express');
const dbconnect = require('./config/database');
const Route = require('./routes/method');
const path=require('path');
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "views/form.html"));
});


app.use("/product",Route);

const PORT=process.env.PORT ||8090;
app.listen(PORT,()=>{
    console.log("Server Started on port no",PORT);
    dbconnect();
});