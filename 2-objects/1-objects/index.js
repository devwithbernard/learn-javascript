/*
 * Objects
 * */

// Create empty object
let gamer = {};
let user2 = {};

console.log(gamer, user2);

// Literals and properties
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

console.log(`lastName : ${user.lastName}; firstName : ${user.firstName}`);

// add property
user.isAdmin = true;
user.count = 0;

console.log(user);

// delete a property
delete user.count;
console.log(user);

// Square braces
let student = {
    name: "Bkonan",
    age: 27,
};

student["likes maths"] = true;
student["love sport"] = false;
console.log(student);

if (student["like maths"]) {
    console.log(`${student.name} love maths.`);
}
if (!student["love sport"]) {
    console.log(`${student.name} doesn't like sport!`);
}

// set square braces property
student['likes maths'] = false;
console.log(student);

// delete square braces property
delete student["love sport"];
console.log(student);