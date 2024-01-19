//create library function sum,mul,mod,divide
const sum = (a,b)=> a+b;
const mul = (a,b)=>{
    return a*b;
}
const mod = (a,b)=>a%b;
const div = (a,b)=> a/b;
module.exports= {sum,mul,mod,div}


//create library that convert string to uppercase

const toUpperCase =(input)=>{
    return input.toUpperCase();
}
module.exports = {toUpperCase};

//create a another library that converts fahrenheit to celcius
const convert = (fahrenheit)=>{
return (fahrenheit-32)*5/9;
};
 module.exports={convert};

//create a another library that converts m to km

const converter = (meter)=>{
return meter/1000;
};
module.exports={converter};



//create a another library that show current date and time

// const getCurrentDateTime = ()=>{
// const currentDate = new Date();
// return getCurrentDateTime.toString();
// };
// module.exports={getCurrentDateTime}
