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
let nums = [1, 2, 3, 4, 5];

// array.indexOf
let isFound = nums.indexOf(2, 0);

isFound === -1 ? console.log(`2 is not in nums`) : console.log("2 is in nums");
console.log(nums.indexOf(6)); // Not found

