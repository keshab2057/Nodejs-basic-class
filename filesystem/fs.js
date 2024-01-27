// const fs = require("fs");

// const createFile = async ()=>{
//  return  fs.writeFileSync("./hello.txt","hello world");
// };
// module.exports = {createFile};

//mathi ko function hard coded ma x tyo function ma parameter pathauda yasari garne

//create file
// const fs = require("fs");

// const createFile = async (path,data)=>{
//  return  fs.writeFileSync(path,data);
// };
// module.exports = {createFile};

//create read update delete sangai garda

const fs = require("fs");
const createFile = (path, data) => {
  return fs.writeFileSync(path, data);
}; //create file ma path,data argument

const readFile = (path) => {
  const result = fs.readFileSync(path, "utf8");
  return result;
}; //only path

// const updateFile = (path, data) => {
//   return fs.appendFileSync(path, data);
// };
// const removeFile = () => {
//   fs.unlinkSync(path);
// };
module.exports = { createFile, readFile};
