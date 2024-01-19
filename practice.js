//write a function to add 2 numbers

const sum = (a,b)=>{
    return a +b;
}
const result =sum(3,4);
console.log(result);

const sum1 =(a,b)=>a+b;
console.log(sum1(5,5));


const http = require("http");
http.createServer((request,responce)=>{
    responce.writeHead(200,{"content-type":"text/html"});
    responce.end("Hello world,keshab");
}).listen(8000);
console.log("server running at port 8000");


