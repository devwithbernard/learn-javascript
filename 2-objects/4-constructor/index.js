/*
* Constructor, operator "new"
* */

// Constructor function

function User(name, age) {
    this.name = name;
    this.age = age;
    this.isAdmin = false;
    this.isAuthorized = age >= 18;
}

const user = new User('Konan Bernard', 27);

console.log(user.isAdmin);

if (user.isAuthorized) {
    console.log("You can visit this website.");
}

const user2 = new User("Ann", 17);
console.log(user2.isAuthorized);

// Constructor Test mode: new.target
function Student(name) {
    if (!new.target) {
        return new Student(name)
    }
    this.name = name;
}

const sudent1 = new Student("John");

// Methods
function Greeting(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`${this.name} great everybody in this agency`);
    }
}

const greet = new Greeting("Kimo");
greet.sayHello();