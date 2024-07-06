"use strict";
//Normal Js way and problems with it
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
console.log(sum(2, "a"));
console.log(sum(2, false));
//TS way
//(1)
function sum(a, b) {
    return a + b;
}
sum(2, 4);
sum(2, "a"); //throw an type error
//(2)
function signUp(email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(email.length);
    console.log(password.length);
    console.log(isPaid);
}
signUp("Som", "1234fng", true);
signUp(2, "5667", false); //throw a type error
signUp(2, 2, 3); //throw a type error
signUp("Som", "1234fng");
//(3)
function add(num1, num2) {
    return true;
}
var addition = add(2, 3); //throw an type error because fn is suppose to
// return a number but it is returing something else
console.log(addition);
//Proper TS way
function addNum(num1, num2) {
    //return "hello" //now you can't return anything that is not a number
    return num1 + num2;
}
var getHello = function (s) {
    return "";
};
var heroes = ["ironman", "Thor", "Hulk", "Loki"];
var heroes = [1, 2, 3, 4];
heroes.map(function (hero) { return "My hero is ".concat(hero); });
addition = addNum(3, 4);
console.log(addition);
