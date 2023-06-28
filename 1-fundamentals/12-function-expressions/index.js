/*
*  Function Expressions
* */

const id = function () {
    return Math.floor(Math.random() * (10 - 1) + 1)
};

let fetchUser = async function (id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    } catch (error) {
        console.log('error :', error);
    }
};

fetchUser(id())
    .then(user => console.log(user))
    .catch(error => console.log(error));


// Callback functions
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("You agreed")
}

function showCancel() {
    alert("You canceled the execution");
}

ask("Did you agreed?", showOk, showCancel);

// another callback
function havePermission(age, yes, no) {
    if (confirm("Did you have " + 18 + "?")) yes();
    else no();
}

havePermission(18, function () {
    alert("Permission granted");
}, function () {
    alert("Permission denied");
})