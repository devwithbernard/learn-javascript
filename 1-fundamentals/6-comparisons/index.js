/*
* COMPARISON
* */

let number1 = 30;
let number2 = 20;
let result = number1 < number2;
if(result){
    console.log(`${number1} is less than ${number2}`);
}else{
    console.log(`${number1} is greater than ${number2}`);
}

// String comparison
console.log('Z' > 'A'); // true
console.log('Glee' > 'Glow'); // false
console.log('Bee' > 'Be'); //true
/*
* @function: compares two strings and returns the index
* from which the difference is observed.
* */
function compareStrings(str1, str2){
    let lengthStr1 = str1.length;
    let lengthStr2 = str2.length;
    let minLength = lengthStr1 > lengthStr2 ? lengthStr2:lengthStr1;

    if(str1 === '' || str2 === ''){
        return 0;
    }

    for(let i = 0; i < minLength; i++){
        let result = {
            isGreater: str1.trim().toLowerCase()[i] > str2.trim().toLowerCase()[i] && 'isGreater',
            isLess: str1.trim().toLowerCase()[i] < str2.trim().toLowerCase()[i] && 'isLess',
            areEqual: str1.trim().toLowerCase()[i] === str2.trim().toLowerCase()[i] && 'areEqual'
        }
        if(result.isGreater){
            return {
                wordGreater:str1,
                index:i,
            }
        }if(result.isLess){
            return {
                wordGreater: str2,
                index1:i,
            }
        }
        if(i === minLength - 1 && result.areEqual){
            return {
                areEqual: str1 === str2,
                words:[str1,str2]
            }
        }
    }
}

console.log(compareStrings('Glae','Glee'));

// Comparison of different types
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true == 1); // true
console.log(false == 0); // true

// null and undefined comparison

console.log(undefined == null); // true
console.log(undefined === null); // false