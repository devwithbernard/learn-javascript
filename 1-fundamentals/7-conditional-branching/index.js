'use strict'

let httpUrl = 'https://the-trivia-api.com/api/questions/'

async function getQuestions(url){
    const response = await fetch(url);
    return response.json();
}

function randomIndex(max, min){
    return Math.floor(Math.random() * (max - min) + min)
}

function randomQuestion(questions, index){
    return questions[index];
}

document.addEventListener('DOMContentLoaded',async (e)=>{
    const questions = await getQuestions(httpUrl);
    const player =  JSON.parse(localStorage.getItem('player')) ?? {
        id:Symbol(),
        name:'',
        score:0,
    }
    document.getElementById('point').innerText = player.score;
    while(!player.name){
        const playerName = prompt("Enter your name: ", "Bkonan");
        if(playerName && playerName.length > 4){
            player.name = playerName;
            break;
        }
    }

    // DOM elements
    const question = document.getElementById('question');
    let questResp =  randomQuestion(questions, randomIndex(questions.length,0));
    question.innerText = questResp.question;

    const responsesTag = document.getElementById('responses');

    function addOptions(){
        const responses = [questResp.correctAnswer, ...questResp.incorrectAnswers];
        responses.forEach((resp)=>{
            responsesTag.innerHTML += `
        <option value="${resp}">${resp}</option>
    `
        })
    }
    addOptions()

    const form = document.getElementById('form');
    const select = document.getElementById('responses');

    function selectedResponse(){
        return select.options[select.selectedIndex].value;
    }

    form.addEventListener("submit",event =>{
        event.preventDefault();
        event.stopPropagation();
        const userResponse = selectedResponse()
        if(userResponse === questResp.correctAnswer){
            player.score += 10;
            document.getElementById('point').innerText = player.score;
            localStorage.setItem('player',JSON.stringify(player));
        }
        document.location.reload();
    })

})