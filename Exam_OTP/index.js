const express=require("express");
const { log } = require("node:console");
const dbconnect = require("./Config/db");
const app = express();
const passport=require("passport");
const session = require("express-session");
const initializer = require("./Middleware/passportAuth");
const Api_Method = require("./Routes/user.routes");
const path=require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("View engine","ejs");
app.set("Views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"Public")));


app.use(session({secret:"secret-key"}))
app.use(passport.initialize);
app.use(passport.session());

initializer(passport);

app.use("/user",Api_Method);

app.listen(8090,()=>{
    console.log("Server Started on port 8090");
    dbconnect();
});