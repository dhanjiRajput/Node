const express = require('express');
const app = express();
const path = require('path');
const dbconnect = require('./config/database');
const router = require('./routes/method');
require("dotenv").config();
app.use(express.json());


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",router);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log("Server started on port ",PORT);
    dbconnect();
});