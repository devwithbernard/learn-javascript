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



