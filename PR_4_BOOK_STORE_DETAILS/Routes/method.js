const {Router}=require('express');
const { getbook, getbookbyid, addbook, updatebook, deletebook, filterBooks } = require('../Controller/routes_method');

const Api_Method=Router();

Api_Method.get("/",getbook);
Api_Method.get("/:id",getbookbyid);
Api_Method.post("/",addbook);
Api_Method.patch("/:id",updatebook);
Api_Method.delete("/:id",deletebook);
Api_Method.get('/filter',filterBooks);

module.exports=Api_Method;