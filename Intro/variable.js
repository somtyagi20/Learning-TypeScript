"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello world";
// greetings = 6; //here ts is throwing error but not
//halting the transpilation, i.e. it doesn't matter ts code has
//type error or not if you will go to run it then it will generater js file and that js file will run as normal
console.log(greetings);
var userId = 675366; //not a optimal way of writing in ts
var age = 21; //type inference: better way of writing
userId.toFixed();
age.toFixed();
userId = "hi"; //giving error
age = "twenty one"; //it is also giving error because TS has sensed
