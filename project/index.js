const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });

  if(res.url=="/"){
    return res.end("hello")
  }
   else if (req.url === "/login") {
   return res.end("Login successful");
  } 
  else if (req.url === "/signup") {
    // res.writeHead(200, { "Content-Type": "text/html" });
  return  res.end("Signup successful");
  } else if (req.url === "/contact") {
    // res.writeHead(200, { "Content-Type": "text/html" });
  return  res.end("Contact us");
  } else if (req.url === "/service") {
    // res.writeHead(501, { "Content-Type": "text/html" });
  return  res.end("How can I help you?");
  }
});

server.listen(8090, () => {
  console.log("Server started...........");
});