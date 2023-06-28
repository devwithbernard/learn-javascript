'use strict'

/*
* Functions in javascript
* */

console.log((function () {
}).constructor === Function);

// Declare a function
function showMessage() {
    console.log("Hi everyone!");
}

showMessage();// execute function

// Local variable
function alertMessage() {
    let message = "I love javascript, the best web programming language!";
    console.log(message);
}

alertMessage();


