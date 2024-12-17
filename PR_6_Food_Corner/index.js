const express=require("express");
const dbconnect = require("./Config/db");
const userRouter = require("./Routes/user.routes");
const foodRouter = require("./Routes/food.route");
const app=express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",userRouter);

app.use("/food",foodRouter);

const PORT=process.env.PORT||8090;
app.listen(PORT,()=>{
    console.log("Server listening on port",PORT);
    dbconnect();
});