const express=require("express");
const { log } = require("node:console");
const dbconnect = require("./Config/db");
const app = express();

const Api_Method = require("./Routes/user.routes");
const path=require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set("Views",path.join(__dirname,"Views"));
app.use(express.static(path.join(__dirname,"Public")));

app.use("/user",Api_Method);

app.listen(8090,()=>{
    console.log("Server Started on port 8090");
    dbconnect();
});