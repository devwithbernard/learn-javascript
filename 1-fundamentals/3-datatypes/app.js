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

// String
let greeting = "Hello";
let phrase = 'Single quotes are ok too.';
let embedString = `Can embed another string: ${greeting.toLowerCase()}`;

console.log("\n",greeting,"\n",phrase,"\n",embedString);

/*
* Boolean
*   true or false
* */
const currentUser = {
    id:Symbol("abc"),
    name:"Bernard Konan",
    username:"bkonan".toUpperCase(),
    email:"bkonan@cntig.net",
    isConnected:false,
}
if(currentUser.isConnected){
    console.log(`${currentUser.username} is online.`);
    currentUser.credentials = {
        cookieId: new Date(),
        connectionTime:Date.now(),
    }
    console.log(currentUser)
}else if(currentUser.isConnected === false){
    console.log(`${currentUser.username} is not connected.\nPlease Sign In!`);
}

/*
* null : means nothing, empty
* */

let users = null;

async function fetchUsers(url){
    const response = await fetch(url);
    return response.json();
}
console.log('before assign users variable a new value : ', users)
users = fetchUsers("https://jsonplaceholder.typicode.com/users");
console.log('After assign users variable a new value: ',users)

// undefined : not assigned value for a variable
let user;
console.log(user);
