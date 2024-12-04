const {Router}=require("express");
const { getAllData, getProductById, createProduct, updateProduct, deleteProduct } = require("../controller/route_method");
const isvalid = require("../middleware/isvalid");
const uploadImage = require("../utils/upload_multer");
const Route = Router();

Route.get("/",getAllData);
Route.get("/:id",getProductById);
Route.post("/",uploadImage.single("img"),isvalid,createProduct);
Route.patch("/:id",updateProduct);
Route.delete("/",deleteProduct);

module.exports = Route;
