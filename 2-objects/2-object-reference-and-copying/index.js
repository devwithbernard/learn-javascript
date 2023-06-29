/*
* Object Reference and Copying
* */

// primitives are copying by value

let phrase = "Hello, world!";
let message = phrase;

console.log("Phrase : ", phrase);
console.log("Message : ", message);

phrase = "Hi everyone!";

console.log("New Phrase : ", phrase);
console.log("Message : ", message);


