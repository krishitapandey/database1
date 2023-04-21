const http =require('http')
const fs =require('fs')


const readfile = fs.readFileSync('json.html')


const server =http.createServer((req,res)=>{

    res.setHeader("Content-type",'text/html');
    res.end(readfile)

})


server.listen(1024,'0.0.0.0',()=>{

   console.log('listening at http://0.0.0.0:1024/');
})