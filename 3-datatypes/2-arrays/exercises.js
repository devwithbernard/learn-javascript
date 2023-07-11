// Exercise 1
const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

// Replace the middle value : odd or even length
const replaceMiddleOfArray = (arr, target) => {
    let halfLength = arr?.length && Math.floor(arr.length / 2);

    if (!arr || !target) return (arr || target)

    if (arr.length % 2 === 0) {
        let leftArray = [];
        let rightArray = [];

        for (let i = 0; i < halfLength; i++) {
            leftArray.push(arr[i]);
        }

        for (let i = halfLength; i < halfLength * 2; i++) {
            rightArray.push(arr[i]);
        }

        return [...leftArray, target, ...rightArray];
    }

    arr?.length % 2 === 1 && (arr[halfLength] = target);
    return arr;
}

console.log(replaceMiddleOfArray(styles, "classics"));
console.log(replaceMiddleOfArray([...styles, "RnB"], "x"));

// strip the first value of array
console.log(styles.shift());

// Prepend Rap and Reggae in the array
styles.unshift("Rap");
styles.unshift("Reggae");

console.log(styles);