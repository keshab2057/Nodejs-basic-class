//instructions
//module or library
//destructure
//parameter/arguments pass

//nodejs inbuilt module(fs)
//write a javascript function that creates a new file and addd content in it.//hello.text file create hunuparyo=>hello world using fs package

const {createFile} = require("./fs");

const files = ()=>{
createFile();
};
files();


//value pass garera herada
const {createFile} = require("./fs");

const file = (path,data)=>{
createFile(path,data);
};
file("hello.txt","hello world");


// const {createFile,readFile} = require("./fs");

const read = async (path)=>{
return readFile(path);
};
const create = async (path,data)=>{
 createFile(path,data);
};
const intializes = async ()=>{
 await create("./hello.txt","hello world");
 const result = await read ("./hello.txt");
console.log({result});
};
intializes();

//Anoter method
const {createFile,readFile} = require("./fs");

const intialize = async (path,data)=>{
 await createFile(path,data);
  const result = readFile(path);
  console.log({result});
};
intialize("./hello.txt","hello world");