const express = require('express');
const dbconnect = require('./Config/db');
const userRouter = require('./Routes/user.route');
const movieRouter = require('./Routes/movie.route');
const cookiparser = require('cooki-parser');
const path=require('path');
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('Views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'Public')));
app.use(cookiparser()); 

app.get("/",(req,res)=>{
    res.send("Welcome to the movie API");
});

app.use("/user",userRouter);

app.use("/",movieRouter);

const PORT=process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log("Server listening on port",PORT);
    dbconnect();
});



