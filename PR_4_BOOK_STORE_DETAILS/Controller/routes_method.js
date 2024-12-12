const Book = require("../Model/books");

const getbook=async(req,res)=>{
    let data= await Book.find();
    res.send(data);
};

const getbookbyid=async(req,res)=>{
    let {id}=req.params;
    let data= await Book.findById(id);
    res.send(data);
};

const addbook=async(req,res)=>{
    let data= await Book.create();
    res.send(data);
};

const updatebook=async(req,res)=>{
    let {id}=req.params;
    let data= await Book.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
};

const deletebook=async(req,res)=>{
    let {id}=req.params;
    let data= await Book.findByIdAndDelete(id);
    res.send(data);
};

const filterBooks = async (req, res) => {
    const { author, category, title, price } = req.query;
    let query = {};
    if (author){
        query.author = author;
    } 
    if (category){
        query.category = category;
    } 
    if (title){
        query.title = { $regex: title, $options: 'i' };
    } 

    let books = await Book.find(query);

    if (price) {
        books = price === "lth" ? books.sort((a, b) => a.price - b.price) : books.sort((a, b) => b.price - a.price);
    }
    res.json(books);
};


module.exports={getbook,getbookbyid,addbook,updatebook,deletebook,filterBooks};