const Blog = require("../Models/Blog.schema");

const blogPage=(req,res)=>{
    const {role}=req.cookies;

    if(role==="admin"){
        res.render('blog');
    } else{
       res.send("You are not authorized to access this page");
    }
};

const createBlog = async(req,res)=>{
    const {username}=req.cookies;
    const blog=await Blog.create(req.body);
    await blog.save();
    res.send(`blog created by`,blog.username);
    res.cookies.set('blogId',blog._id);
    req.body.author=username;
};