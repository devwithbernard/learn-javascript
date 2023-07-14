// Camelize word
const camelize = (str, separator) => {
    if (!str) return str;
    return str.split(separator).map((word, index) => {
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    }).join("");
}

console.log(camelize('list-style-image', '-'));

// filter Range
const filterRange = (arr, a, b) => arr.filter(value => value >= a && value <= b);

console.log(filterRange([5, 3, 8, 1], 1, 4));

// Filter range "in place"
const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

// CopySorted
const copySorted = (arr) => arr.map(a => a).sort((a, b) => a - b);

let arr2 = [5, 3, 8, 1];
console.log(copySorted(arr2));
console.log(arr2);

// Create an extendable calculator
function Calculator() {
    this.calculate = function (str, operator) {
        const numbers = str.split(operator).map(number => Number(number));
        return numbers.reduce((acc, item) => {
            switch (operator) {
                case "+":
                    return acc + item;
                case "-":
                    return acc - item;
                case "*":
                    return acc * item;
                case "**" || "^":
                    return acc ** item;
            }
        })
    }
}

let calc = new Calculator;
console.log(calc.calculate("3+7", "+"));

// Map objects
let users = [
    {name: "John", surname: "Smith", id: 1},
    {name: "Pete", surname: "Hunt", id: 2},
    {name: "Mary", surname: "Key", id: 3},
];

const mapUsers = users.map(({name, surname, id}) => ({
    id: id,
    fullName: `${name} ${surname}`
}));
console.log(mapUsers);

// Sort objects
const sortByName = (arr) => arr?.map(item => item.name).sort((itemA, itemB) => itemA.localeCompare(itemB));
sortedByName = sortByName(users);
console.log(sortedByName);

// Get average age
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let users2 = [john, pete, mary];

const getAverageAge = (array) => (array.reduce((acc, item) => acc + item?.age, 0) / array.length);

console.log(getAverageAge(users2));

// Filter unique array members
function unique(array) {
    let results = [];

    for (let item of array) {
        if (!results.includes(item)) results = [...results, item];
    }

    return results;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));

// Create keyed object from array
const groupById = (array) => {
    if (!Array.isArray(array)) return array;

    const obj = {}

    array.map(item => (
        obj[item.id] = {id: item.id, ...item}
    ))
    
    return obj;
}

let someUsers = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(groupById(someUsers));