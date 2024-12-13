const {Router}=require('express');
const { getbook, getbookbyid, addbook, updatebook, deletebook, filterBooks, getStore } = require('../Controller/routes_method');
const isvalid = require('../Middleware/isvalid');

const Api_Method=Router();

Api_Method.get("/",getStore);
Api_Method.get("/books",getbook);
Api_Method.get("/books/book/:id",getbookbyid);
Api_Method.post("/books/addbooks",isvalid,addbook);
Api_Method.patch("/books/update/:id",updatebook);
Api_Method.delete("/books/delete/:id",deletebook);
Api_Method.get('/books/filter',filterBooks);

module.exports=Api_Method;