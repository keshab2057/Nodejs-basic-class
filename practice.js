

//  write a java script function that converts super long description of blog into...format and connect the above library to index.js file 
// const isValidNumber = (a) => {
    
const isValidNumber = (a) => {
    const num = String(a);
    if (num.length < 10 || num.length > 10) return false;
    return num.startsWith("98");
  };
  const resultss = isValidNumber(9848859581);
  console.log({result});
  
  
// }
       
//write a library that converts super long description of blog into...format and concat the above library to index.js file
//for example :keshab is mern stack instructor.he has been working in this field for 1 years.
//output:keshab is mern stack instructor.he has been working in...
  
const truncate = (string)=>{
  return string.slice(0,54).concat("...");
};
const result=truncate("keshab is mern stack instructor.he has been working in this field for 1 years.")
console.log(result);