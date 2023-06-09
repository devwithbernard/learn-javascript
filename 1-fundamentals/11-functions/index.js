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

// Global variable
let userName = "Lee";

function welcomeMessage() {
    let message = "Welcome " + userName + "on my website."
    console.log(message);
}

welcomeMessage();

function modifyExternalVariable() {
    userName = 'Bob';
    let message = 'Hello, ' + userName;
    console.log(message);
}

modifyExternalVariable();

console.log(userName); // variable has been modified in modifyExternalVariable function

// Parameters
function message(text, name) {
    if (name === undefined) {
        name = 'Bob';
    }
    text = `*${name}*:` + text;
    console.log(text);
}

message('welcome', 'Ann')

function showCount(counter) {
    console.log(counter ?? 'unknown'); // if 'counter' is undefined or null
}

showCount(10);

// Return value
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 15));

function checkAge(age) {
    if (age === undefined) return 'unknown';
    if (age < 18) return 'Do you have the permission of your parents';
    return true;
}

let age = 17;
if (checkAge(age)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
