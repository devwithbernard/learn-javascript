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

// Copy by reference
let user = {
    name: "John Doe",
    age: 30,
}

let student = user;

console.log("User: ", user);
console.log("Student: ", student);

user.isAdmin = true;

console.log("New User: ", user);
console.log("New Student", student);

// Comparison by reference
let object1 = {};
let objectCopy = object1;

console.log(object1 === objectCopy); // the two variables pointing at the same reference

let a = {};
let b = {};

console.log(a === b); // False : they don't point at the same reference;