const {Router}=require("express");
const { getById, getAllData, createData, updateData, deleteData } = require("../controller/route_method");
const routemethod=Router();

routemethod.get("/:id",getById);
routemethod.get("/",getAllData);
routemethod.post("/",createData);
routemethod.patch("/:id",updateData);
routemethod.delete("/:id",deleteData);

module.exports=routemethod;