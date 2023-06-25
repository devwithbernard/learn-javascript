/*
* Logical operator in js
* */

// OR operator:
console.log(true || false);
console.log(true || true);
console.log(false || false);


// truthy value
let hour = 9;
let isWeekend = true;
if(hour < 10 || hour > 18){
    console.log("The office is closed.");
}if(hour < 10 || hour > 18 || isWeekend){
    console.log("The office is closed.");
}

let firstName = "";
let lastName = "";
let nickName = "Bernoush";

let username = firstName || lastName || nickName || "Anonymous";
console.log(username);



