//{custom exercise}
//write a js function that puts comma in every thousand place
//eg:10000=10,000
//eg:1000=1,000
const numberFormater = (data)=>{
return Number(data).toLocaleString();
};
module.exports = {numberFormater};