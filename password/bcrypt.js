const bcrypt = require("bcryptjs");
const hashPw = (String)=>{
    return bcrypt.hashSync(String,10);
};
const comparePw = (String,hash)=>{
    return bcrypt.compareSync(String,hash);
};
module.exports = {hashPw,comparePw};