const express=require("express");
const dbconnect = require("./Config/db");
const path=require("path");
const userRouter = require("./Routes/user.routes");
const foodRouter = require("./Routes/food.route");
const cookieparser=require("cookie-parser");
const app=express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));                                           
app.use(cookieparser());    

app.set('view engine', 'ejs');
app.set('Views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'Public')));

app.use("/user",userRouter);
app.use("/foods",foodRouter);

const PORT=process.env.PORT||8090;
app.listen(PORT,()=>{
    console.log("Server listening on port",PORT);
    dbconnect();
});