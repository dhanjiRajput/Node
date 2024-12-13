const Book = require("../Model/books");

const getStore = async(req,res)=>{
    res.send("welcome to the book store")
}

const getbook=async(req,res)=>{
    try {
        let data= await Book.find();
        res.send(data);
    } catch (error) {
        console.log("Error getting book", error);
    }
};

const getbookbyid=async(req,res)=>{
    try {
        let {id}=req.params;
        let data= await Book.findById(id);
        if (!data) return res.status(404).json({ message: "Book not found" });
        res.send(data);
    } catch (error) {
        console.log("Error getting book", error);
    }
};

const addbook=async(req,res)=>{
    try {
        let data= await Book.create();
        res.send(data);
    } catch (error) {
        console.log("Error creating book", error);
    }
};

const updatebook=async(req,res)=>{
    try {
        let {id}=req.params;
        let data= await Book.findByIdAndUpdate(id,req.body,{new:true});
        res.send(data);
    } catch (error) {
        console.log("Error getting book", error);
    }
};

const deletebook=async(req,res)=>{
    try {
        let {id}=req.params;
        let data= await Book.findByIdAndDelete(id);
        res.send(data);
    } catch (error) {
        console.log("Error getting book", error);
    }
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


module.exports={getbook,getbookbyid,addbook,updatebook,deletebook,filterBooks,getStore};