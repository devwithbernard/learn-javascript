// Exercise 1
let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;


// Exercise 2
const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
}


// Exercise 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const totalSalaries = (salaries) => {
    let totalSalaries = 0;

    if ((Object(salaries) === salaries) && !isEmpty(salaries)) {

        for (let key in salaries) {
            totalSalaries += salaries[key];
        }

        return totalSalaries;
    }

    return 0;
}

console.log(totalSalaries(salaries));


// Exercise 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj, number) => {
    if (Object(obj) === obj && !isEmpty(obj) && number > 1) {
        for (let key in obj) {
            !isNaN(obj[key]) && (obj[key] = obj[key] * number);
        }
        return obj;
    }
    return obj;
}

console.log(multiplyNumeric(menu, 2))