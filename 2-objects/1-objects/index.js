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

// Computed property
/*let fruit = prompt("Which fruit to buy?", 'apple');
let bag = {
    [fruit]: 5,
}
alert(bag[fruit]);*/

// Property value shorthand

function makeUser(name, age) {
    return {
        name: name,
        age: age
    }
}

const bKonan = makeUser("Bernard Konan", 27);
console.log(bKonan);

// Another way to rewrite above function
const makeUserCopy = (name, age) => {
    return {name, age};
}

const johnDoe = makeUserCopy("John Doe", 30);
console.log(johnDoe);

//  Property existence test with 'in'
user = {
    name: "Bkonan",
    age: 27
}

if ("name" in user) console.log("user.name exists!");
if (!("blablabla" in user)) console.log("user.blablabla doesn't exists");

// The 'for...in' loop
let post = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

for (let key in post) {
    console.log(post[key] + "\n")
}

