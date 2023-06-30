let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sizes: {
        height: 182,
        weight: 72,
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(user.fullName());

// Copy

let userClone = Object.assign({}, user);
console.log(userClone.fullName());

let userClone2 = structuredClone(user)
console.log(userClone2);

