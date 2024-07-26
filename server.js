const http = require("http");

const port = 8082;

const toDoList =["Need to build func A","Need Test func 123"]
http.createServer((req,res) =>{
    const{method,url} = req;
    // console.log(method,url);
    if(url === "/todos"){
        if(method ==="GET"){
            res.writeHead(200);
            res.write(toDoList.toString())
        }else{
            res.writeHead(501);
        }
    }else if(url === "/"){
         
    }

    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running Successfully on port ${port}`)
})