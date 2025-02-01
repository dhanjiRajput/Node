const express = require('express');
const dbconnect = require('./Config/db');
const indexUser = require('./Routes');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/api/v1",indexUser);

const port=process.env.port ||8090;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    dbconnect();
});