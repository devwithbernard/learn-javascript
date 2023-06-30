/*
* Object Methods : this
* */

'use strict'

let user = {
    name: "John Doe",
    age: 30,
    sayHello() {
        console.log(" Hello world");
    }
}

user.sayHello();

let user2 = {
    name: "John Doe",
    age: 27,
    sayHello: function () {
        console.log("Hello " + this.name);
    }
}

user2.sayHello();

// this :
function sayHi() {
    console.log("Hello " + this.name);
}

const student = {name: "Shell"};
const gamer = {name: "Arda"}

student.f = sayHi;
gamer.f = sayHi;

student.f();
gamer.f();