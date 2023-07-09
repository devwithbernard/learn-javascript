// Uppercase the first character
const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(ucFirst("Hello world!"));

//CheckSpam
const checkSpam = (str) => {
    if (!str) return false;
    return str.toUpperCase().includes("xxx".toUpperCase()) || str.toUpperCase().includes('Viagra'.toUpperCase());
}

console.log(checkSpam("Viagra xx is cool"));
console.log(checkSpam(""));
console.log(checkSpam("xxx FCFA"));

// Truncate text
const truncate = (str, maxLength) => {
    if (!str) return str;
    return str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
}

console.log(truncate("hello world", 10));
console.log(truncate("What I'd like to tell on this topic is:", 20))

// Extract the money
const extractCurrencyValue = (currency) => {
    //return +currency.slice(1);
    return currency.startsWith("$") ? Number(currency.slice(1)) : currency;
}

console.log(extractCurrencyValue("$120"));