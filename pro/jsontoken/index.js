const fs =require("fs");


//forming a objext 

const bioData ={
    name:"krishita",
    age :19
};

//converting a object into json  --stringify

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);


// //converting a json intop object -- parse 

// const objData =JSON.parse(jsonData);
// console.log(objData);

//tranfering a info of index.js into info.json file 
fs.writeFile("info.json",jsonData,(err)=>
{
    console.log("done");
})


//getting the info from file 
fs.readFile("info.json","utf-8",(err,data)=>
{
    console.log(data);
})