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

// Cloning, Merging : Object.assign()
let employee = {
    name: "John Doe",
    salary: 1200,
}

let employeeClone = {};

for (let key in employee) {
    employeeClone[key] = employee[key];
}

console.log(employee, employeeClone);

employee.post = "Director";

console.log(employee, employeeClone);

// Using the Object.assign()
let employeeCopy = {};
Object.assign(employeeCopy, employee);
console.log(employeeCopy);

employeeCopy.isAdmin = true;

console.log(employeeCopy, employee);

let post = {
    id: 1,
    title: "Hello world",
    body: "Lorem ipsum dolor...",
}

let clonePost = Object.assign({}, post);
console.log(clonePost);


// Nested Cloning
user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let userClone = Object.assign({}, user);
console.log(userClone);
userClone.sizes.width = 200;
console.log(userClone, user); // userClone.sizes has been copy by reference

userClone.sizes = Object.assign({}, user.sizes);
userClone.sizes.height = 192;
console.log(user, userClone);

// Structured Cloning
let userC = user;

let cloneUser = structuredClone(userC);

console.log(userC, cloneUser);
cloneUser.sizes.height = 197;

console.log(userC, cloneUser);
