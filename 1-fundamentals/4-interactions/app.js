/*
* Interactions with users
* alert, prompt, confirm
* */

// show message
const btnAlert = document.querySelector("#btn-alert");
btnAlert.addEventListener('click',(event)=>{
    event.preventDefault();
    event.stopPropagation();
    alert("Hello world everyone!");
})

// prompt and confirm message
let age = +prompt("Enter your age: ", 18);
let isOk = confirm(`Is your age is ${age} years old?`);
if(age && !isNaN(age) && isOk){
    let ageNumber = +age;
    switch (ageNumber){
        case ageNumber < 10:
            alert("You're a child");
            break;
        case ageNumber > 10 && ageNumber <= 12:
            alert("You're a teen");
            break;
        case ageNumber > 12 && ageNumber <= 18:
            alert("You're a teenager");
            break;
        case ageNumber > 18:
            alert("You're an adult");
            break;
        default:
            alert("You're an human");
            break;
    }
}else{
    alert("You're typed a wrong value!");
}
