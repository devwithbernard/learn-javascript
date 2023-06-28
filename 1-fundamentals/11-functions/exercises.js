/*
* Exercises
* */

// Exercise 1
function checkAge(age) {
    return age > 18 ? true : 'Did your parents allow you?'
}

console.log(checkAge(15));

function checkAgeCopy(age) {
    if (age === undefined) age = 15;
    return (age > 18) || 'Did your parents allow you?';
}

console.log(checkAgeCopy(22));

// Exercise 2
function min(number1, number2) {
    if (number1 === undefined || number2 === undefined) return undefined;
    return number1 > number2 ? number2 : number1;

}

console.log(min(10, 12));

// Exercise 3
function pow(x, n) {
    if (x === undefined || n === undefined) return undefined;

    n = parseInt(n);
    x = parseFloat(x);
    if (x && n > 1) {
        return Math.pow(x, n);
    } else {
        return `${n} must be superior to 1 and must be an integer`
    }
}

console.log(pow(5.2, 5));

function powCopy(x, n) {
    if (x === undefined || n === undefined) return undefined;

    x = parseFloat(x);
    n = parseInt(n);
    let result = 1;
    if (x === 0) {
        return 1;
    }
    for (let count = 1; count <= n; count++) {
        result *= x;
    }
    return result;
}

console.log(powCopy(10, 3));