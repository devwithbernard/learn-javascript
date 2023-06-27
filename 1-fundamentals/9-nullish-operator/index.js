/*
* Nullish coalescing operator: ??
*  */

let a;
let b = "Hello";

const result = (a != null && b != undefined) ? a : b;
console.log(result);

// Common case
let gamer;
console.log(gamer ?? 'Anonymous');


let user = {
    id: Symbol(),
    name: "",
    avatar: "",
    role: null,
    isAdmin: true,
};

let userRole = user.role ?? 'user';
console.log(userRole);

console.log(user.isAdmin ? 'admin' : userRole);

