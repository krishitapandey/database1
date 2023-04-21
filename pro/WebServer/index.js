const http =require('http');
const mongoose =require('mongoose');


const server = http.createServer((req,res)=>
{
    //response when server work 
    res.end("hello server");
})

server.listen(3000,"127.0.0.1",()=>{
    console.log("listening to server");
});