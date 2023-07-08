'use strict'

// String Declaration
let singleQuote = 'Single-quotes';
let doubleQuotes = "Double-Quotes";
let backticks = `Backticks`;

console.table([singleQuote, doubleQuotes, backticks]);

// String's Length
const lenOfBackticks = backticks.length;
console.log(lenOfBackticks);

// print backticks character
for (let character of backticks) {
    console.log(character);
}

// Accessing characters
let user = "John Doe";

console.log(user[0]);
console.log(user[4]);
console.log(user[user.length - 1]); // last character

// Negative accessing characters
let sentence = "The lyrics of the song";
for (let i = 1; i <= sentence.length; i++) {
    console.log(sentence.at(-i));
}

// Changing the case
let randomSentence = "Jerry liked to look at paintings while eating garlic ice cream.";
let lowerCaseSentence = randomSentence.toLowerCase();
console.log(lowerCaseSentence);

let upperCaseSentence = randomSentence.toUpperCase();
console.log(upperCaseSentence);

// Capitalize the random sentence
const capitalize = sentence => {
    return sentence[0].toUpperCase() + sentence.slice(1, sentence.length).toLowerCase();
    //return sentence[0].toUpperCase() + sentence.slice(1, sentence.length).toLowerCase().join("");
}

console.log(capitalize("hello world!"));
