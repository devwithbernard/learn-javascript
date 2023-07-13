// array.splice
let numbers = [1, 2, 3, 4, 5];

numbers.splice(1, 2); // delete values
console.log(numbers);

numbers.splice(0, 2, 2, 3, 4);  // Delete and add new values
console.log(numbers);

// array.slice
let letters = ["a", "b", "c", "d", "e"];

const slicedLetters = letters.slice(1, 3);
console.log(slicedLetters);

console.log(letters.slice(2,));

// array.concat
let arr = [1, 2];

console.log(arr.concat([3, 4]));
console.log([...arr].concat(3));
console.log(arr.concat([3, 4], [5, 6]));

// array.forEach

function log(item) {
    console.log(item)
}

["Bilbo", "Gandalf", "Nazgul"].forEach(log);

let users = ["John", "Doe", "Jean"];
users.forEach((user, userIndex, users) => {
    console.log(`'${user}' is at index '${userIndex}' in '${users}'`)
})

// Searching
let nums = [1, 2, 5];

// array.indexOf
let isFound = nums.indexOf(2, 0);

isFound === -1 ? console.log(`2 is not in nums`) : console.log("2 is in nums");
console.log(nums.indexOf(6)); // Not found

// array.includes
console.log(nums.includes(4));

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/*setInterval(() => {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let randomInt = randomNumber(min, max);

    if (nums.includes(randomInt)) {
        console.log(`${randomInt} is in ${nums}`);
    } else {
        console.log("Oops!!! Not in.");
    }
}, 2000);*/

// array.find
let usersCopy = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "Doe"},
];

let user = usersCopy.find(user => user.id === 2);
console.log(user);

console.log(usersCopy.find(user => user.name.toUpperCase() === "JOHN"));

// array.findIndex
console.log(usersCopy.findIndex(item => item.name === "Mary"));

// array.filter
console.log(usersCopy.filter(user => user.name !== "Pete"));

let filteredUsers = usersCopy.filter(user => user.id < 3);
console.log(filteredUsers);

// array.map
numbers = [2, 7, 8, 9, 11];

const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

const names = ["John", "Sam", "Gill", "Mary"];

const uppercaseNames = names.map(name => name.toUpperCase());
console.log(uppercaseNames);

// array.sort
let array = [1, 2, 15];

array.sort();

console.log(array); // [1,15,2]

// Correct way to sort
const compare = (a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

array.sort(compare);
console.log(array); // [1,2,15]

const accounts = [{
    id: 1,
    name: "Jean",
    balance: 3200
}, {
    id: 2,
    name: "Mary",
    balance: 2300
}, {
    id: 3,
    name: "Doe",
    balance: 4500
}, {
    id: 4,
    name: "Mario",
    balance: 985
}];

// sorted accounts array by balance order
accounts.sort((accountA, accountB) => (accountA.balance - accountB.balance));
console.log(accounts);

// array.split, array.join
const strNames = "Gill, Jack, Melinda";

const arrayNames = strNames.split(",");
console.log(arrayNames);

for (let name of arrayNames) console.log(name);

let string = "test";
const lettersStr = string.split("");

console.log(lettersStr);

const idsValuesLetters = string.split('').map((char, id) => {
    return {id, char}
})
console.log(idsValuesLetters);

let joinLetters = lettersStr.join("-");
console.log(joinLetters);