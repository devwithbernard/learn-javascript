/*
* BASIC OPERATORS IN JAVASCRIPT
*   Math
*     - Addition
*     - Subtraction
*     - Multiplication
*     - Division
*     - Remainder
*     - Exponentiation
* */

// Math : Addition
  let number1 = 10;
  let number2 = 30;
  const sum = number1 + number2;
  console.log(`${number1} + ${number2} = ${sum}`);

 // Subtraction
let num1 = 50;
let num2 = 30;
const minus = num1 - num2;
console.log(`${num1} - ${num2} = ${minus}`);

// Multiplication
let time1 = 13.5;
let coefficient = 6;
const times  = time1 * coefficient;
console.log(`${String(time1)} x ${String(coefficient)} = ${times}`);

// Division
  // services
    function round(number,decimal){
        if(isNaN(number)){
            return null;
        }
        return number.toFixed(decimal);
    }
    console.log(round(29.398571428571426,3));
let numberToDivide = 205.79;
let divider = 7;
const divisionResult = numberToDivide/divider;
console.log(`${numberToDivide} / ${divider} = ${round(divisionResult,3)}`);

// Remainder
function isPrime(number){
    for(let i = 2; i < number; i++){
        if(number%i === 0) return false;
    }
    return number > 1;

}

let number = 18;
if(isPrime(number)){
    console.log(`${number} is a prime number.`)
}else{
    console.log(`${number} is not a prime number.`);
}

// Exponentiation
function exponentiation(number, exponent){
    return number**exponent;
}
console.log(exponentiation(10,3));