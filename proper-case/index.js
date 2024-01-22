const { Console } = require("console");
const pub = require("proper-upper-case")
const convertString = (string)=>{
    return pub(string);
}
const result = convertString("kshab sutar is teacher");
console.log({result});

//write a function to convert title to slug
//EG:"React Js Clean Guide"=>react-js-clean-guide
const slugger = (string)=>{
    return string.toLowerCase().replaceAll(" ","-");
};
const results = slugger("React Js Clean Guide");
console.log({results});


//use npm package to find the slug converter(slugigy)

const slug = require("slugify");
const sluggers= (string)=>{
    return slug(string,{lower:true});
}
const res = sluggers("React Js Clean Guide");
console.log({res});

