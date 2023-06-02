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