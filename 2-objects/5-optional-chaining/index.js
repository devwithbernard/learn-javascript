/*
*   Optional chaining
* */

let user = {
    name: "Bernard Konan",
    address: {
        street: "Yopougon Ananeraie, Rue Eglise Sainte Elisabeth"
    }
};
//console.log(user.address.street); // cause error

// best practices
if (user.address.street) {
    console.log(user.address.street)
} else {
    console.log("user.address.street doesn't exists!")
}