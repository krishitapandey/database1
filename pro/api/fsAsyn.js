
//creating a file  asynchronously

const fs = require('fs');

fs.writeFile("file.txt","today is friday",(err)=>{

    console.log("complete");
    console.log(err);
});

//WRITE THIS UTF-8 inorder to prevent the buffer  data like 74 6f 61
fs.readFile("file.txt","UTF-8",(err,data)=>
{
    console.log(data);
})