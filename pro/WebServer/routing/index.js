const http =require('http');
const mongoose =require('mongoose');
const fs=require('fs');


const server = http.createServer((req,res)=>
{
    // console.log(req.url);
    if (req.url=='/'){res.end("hello from home side ")}
    
    //response when server work 
    else if (req.url == '/about'
    ){res.end("hello server hh");}

    else if(req.url=="/userapi")
    {
        fs.readFile('${_dirname}/api/api.json',"UTF-8",(err,data)=>
        {
            console.log(data);
        })
    }

    else{
        //making a client know that they have given wrong url 
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error</h1> ");
    }
    
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("listening to server");
});