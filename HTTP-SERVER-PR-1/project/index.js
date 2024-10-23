const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});

    if(req.url=="/"){
        fs.readFile("index.html","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.send(data);
            }
        });
    }else if(req.url=="/login"){
        return res.send("Login Successfully....");
    }else if(req.url=="/signup"){
        return res.send("Sign Up Successfully...");
    }else if(req.url=="/contact"){
        return res.send("Contact Us...");
    }else if(req.url=="/service"){
        return res.send("How Can I Help You...");
    }
});

server.listen(8090,()=>{
    console.log("Server Started.....");
});