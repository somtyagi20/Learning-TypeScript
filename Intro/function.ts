//Normal Js way and problems with it

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));
// console.log(sum(2, "a"));
// console.log(sum(2, false));

// //TS way
// //(1)
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(2, 4);
// sum(2, "a"); //throw an type error

// //(2)
// function signUp(email: string, password: string, isPaid: boolean = false) {
//   console.log(email.length);
//   console.log(password.length);
//   console.log(isPaid);
// }

// signUp("Som", "1234fng", true);
// signUp(2, "5667", false); //throw a type error
// signUp(2, 2, 3); //throw a type error
// signUp("Som", "1234fng");

// //(3)
// function add(num1: number, num2: number) {
//   return true;
// }

// let addition: number = add(2, 3); //throw an type error because fn is suppose to
// // return a number but it is returing something else
// console.log(addition);

// //Proper TS way
// function addNum(num1: number, num2: number): number {
//   //return "hello" //now you can't return anything that is not a number
//   return num1 + num2;
// }

// const getHello = (s: string): string => {
//   return "";
// };

// const heroes = ["ironman", "Thor", "Hulk", "Loki"];
// const heroes = [1, 2, 3, 4];

// heroes.map((hero):string => `My hero is ${hero}`);
// addition = addNum(3, 4);
// console.log(addition);

// const consoleError = (errmsg:string) => {
//     console.log(errmsg);
// }//not a good way in ts

// const consoleError = (errmsg:string):void => {
//     console.log(errmsg);
// }//good way in ts

// const handleerror = (errmsg:string):never => {
//     throw new Error(errmsg);
// } //this function never returns any value, this is close to void but void can return empty

export {};
