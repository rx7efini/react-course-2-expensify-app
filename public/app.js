"use strict";

//arguments object - no longer bound by arrow function
//this keyword - no longer bound by arrow functions

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1));
