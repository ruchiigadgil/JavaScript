const http = require("http");

const port = 8082;

http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World Ruchi Gadgil</h1>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running Successfully on port ${port}`)
})