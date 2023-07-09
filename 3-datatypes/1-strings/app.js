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

// Searching for a substring
// str.indexOf
let string = "Widget with id";
let substring = "widget";

let isFound = string.toUpperCase().indexOf(substring.toUpperCase(), 0);
console.log(isFound);
if (isFound === -1) {
    console.log(`'${substring}' is not in '${string}'.`)
} else {
    console.log(`'${substring}' is in '${string}'.`)
}

substring = 'id';
console.log(string.indexOf(substring, 2));

// Searching all occurrences of a substring
let str = 'As sly as a fox, as strong as an ox';
let substr = 'as';

let occurrencePositions = [];
let position = 0;

while (true) {
    let positionFound = str.toUpperCase().indexOf(substr.toUpperCase(), position);
    if (positionFound === -1) break;
    occurrencePositions.push(positionFound);
    position += positionFound + 1;
}

console.log(occurrencePositions);

// or
let occurrences = [];
let pos = -1;
while ((pos = str.toUpperCase().indexOf(substr.toUpperCase(), pos + 1)) != -1) {
    occurrences.push(pos);
}
console.log(occurrences);

// includes, startsWith, endsWith
let otherStr = "Widget contains id";
let isInOtherStr = otherStr.includes('id');
console.log(isInOtherStr);

console.log(otherStr.toUpperCase().startsWith("wi".toUpperCase()));

console.log(otherStr.toUpperCase().endsWith("id".toUpperCase()));