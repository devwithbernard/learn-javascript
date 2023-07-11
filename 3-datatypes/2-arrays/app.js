// Declaration
let arr = [];

// Accessing the elements
let fruits = ["Apple", "Cherry", "Pineapple"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Replace element
fruits[3] = "Lemon";
console.log(fruits);

// Get last element
let lastElement = fruits.at(-1) || fruits[fruits.length - 1];
console.log(lastElement);

// Methods pop/push, shift/unshift

let users = ["John", "Doe", "Mike"];
let usersCopied = [...users];

let removedElement = users.pop();
console.log(removedElement, ";", users);

users.push("Ben");
console.log("New users:", users);

let firstElementRemoved = usersCopied.shift();
console.log(firstElementRemoved, ":", usersCopied);

usersCopied.unshift("Kenneth");
console.log(usersCopied);

// Loops
const soungs = ["Eternal", "Memories", "The way she left",]

for (let i = 0; i < soungs.length; i++) {
    console.log(`index ${i}: ${soungs[i]}`);
}

// for ... of : loop through values
for (let song of soungs) {
    console.log(song);
}

// a world about : "length"
let cars = ["volvo", "peugeot", "bugatti", "chevrolet", "citroen", "Renault"];

cars.length = 3;
console.log(cars); // truncate the array with 3 elements

cars.length = 10;
console.log(cars[9]); // undefined

// Array to string

let numbers = [1, 2, 3];
console.log(String(numbers));

const arrayToString = (arr) => {
    let arrStr = '';

    for (let i = 0; i < arr.length; i++) {

        if (i === arr.length - 1) {
            arrStr += arr[i];
            break;
        }

        arrStr += arr[i] + ",";
    }
    return arrStr;
}
console.log(arrayToString(numbers));

// array comparison

console.log([] === []); // different reference

let nums = [2, 5, 7];
let nums1 = nums;
let nums2 = nums;

console.log(nums1 === nums2); // two variables have same reference

// Deep copy
nums1 = [...nums];
nums2 = [...nums];

console.log(nums1 === nums2); // different objects. They don't point at the same reference


