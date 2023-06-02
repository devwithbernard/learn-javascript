/*
    DATA TYPES:
     - Number
     - BigInt
     - String
     - Boolean(Logical Type)
     - null
     - undefined
     - object (complex data type)
 */

// Number
const PI = Math.PI;
let randomFactor = Math.random();
let radius = Math.floor( randomFactor*10 >=5 ? 10*randomFactor:5+10*randomFactor);

// Improve Math.round
let _round = Math.round;
Math.round = (number, decimals)=>{
    if (arguments.length === 1){
        return _round(number);
    }
    let times = Math.pow(10, decimals);
    return _round(number*times)/times;
}

let circleArea =   Math.round(PI * radius * radius,2).toString().replace('.',',');
console.log(`
    Circle Area : ${circleArea} m^2
`);

// BigInt
const MIN_BIGINT = -(Math.pow(2,53) - 1);
const MAX_BIGINT = Math.pow(2,53) - 1;

// Generate a random BigInt number between min bigInt and max bigInt
let randomBigInteger = Math.floor(Math.random()*(MAX_BIGINT - MIN_BIGINT));
console.log(`
    Random Big Integer : ${randomBigInteger}
`);