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

