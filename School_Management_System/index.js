const express = require('express');
const dbconnect = require('./Config/db');
const userRouter = require('./Routes/user_route');
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Routes
app.use("/api/v1/user",userRouter);

const port=process.env.port ||8090;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    dbconnect();
})