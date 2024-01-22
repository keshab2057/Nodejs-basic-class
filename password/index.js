const {hashPw,comparePw} = require("./bcrypt");
const hashedPw = hashPw("password");
const result = comparePw("password",hashedPw);
console.log({result});