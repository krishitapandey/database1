//include a module 
const fs = require ("fs");

//asynchronous 
const tex =fs.readFile("start.txt","utf-8",(err,data)=>
{
    console.log(err,data); 
}); 



//have to read a content of a file and synchronous (sync) this must execute call first 
const text =fs.readFileSync("json.html","utf-8");
console.log(text);

//to replace the text information 
// text = text.replace("string", "kpandey")
let text1 = text.replace("string", "read");

fs.writeFileSync("start.txt",text1);
console.log("creating a file ");

// //synchronous or blocking 
// -line by line execution 

// //Asynchronous or non-blocking
// -ine by line execution  not guaranteed
// -callbacks will fire 

