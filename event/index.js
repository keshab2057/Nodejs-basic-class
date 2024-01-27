// const events = require("events");
// const eventEmitter = new events.EventEmitter();
// //create an event handler
// const myEventHandler = ()=>{
//     console.log("I hear a scream!");
// };
// //assign the event handler to an event
// eventEmitter.on("scream",myEventHandler);
// //fire the scream event
// eventEmitter.emit("scream");

// const events = require("events");
// const eventEmitter = new events.EventEmitter();

// const discount = ()=>{
//     console.log("I heard 20% discout");
// };
// const shoping =()=>{
//     console.log("you got 20% discount");
// }
// eventEmitter.on("discout",discount);
// eventEmitter.on("shoping",shoping)
// eventEmitter.emit("discout");
// eventEmitter.emit("shoping");


//value pass garera herau
const events = require("events");
const eventEmitter = new events.EventEmitter();

const discount = (percent)=>{
    console.log(`I heard ${percent}% discout`);
};
const shoping =(percent)=>{
    console.log(`you got ${percent}% discount`);
}
eventEmitter.on("discout",(percent)=>{
discount(percent);
});
eventEmitter.on("shoping",(percent)=>{
    shoping(percent);
});
eventEmitter.emit("discout",50);
eventEmitter.emit("shoping",30);
