/*
*   Loops : 'while' and 'for'
* */

// while loop

let counter = 0;
while (counter < 3) {
    counter++;
    console.log(`value : ${counter}`);
}

// Guess Game

function randomNumber(min, max) {
    return Math.floor(Math.random() * Math.abs(max - min)) + (max > min ? min : max);
}

console.log(randomNumber(0, 10));

function isValidName(name) {
    if (typeof name !== 'string') {
        return {
            status: false,
            message: "Name must be a string."
        }
    }
    if (name.length < 4 || name.length > 20) {
        return {
            status: false,
            message: "Name must be between 4 and 20 characters long."
        }
    }
    if (!/^[a-zA-Z\d]+$/.test(name)) {
        return {
            status: false,
            message: "Username can only contain alphanumeric characters (letters and numbers)."
        }
    }
    return {
        status: true,
        message: 'Name is valid.'
    }
}

function isGuessed(gamerNumber, guessedNumber) {
    if (gamerNumber === guessedNumber) {
        return 'is equal';
    }
    return gamerNumber > guessedNumber ? 'is great' : 'is less';
}

const main = () => {
    let guessedNumber = randomNumber(0, 10);

    const gamer = {
        id: Symbol(),
        name: '',
        score: 0,
        status: 'looser',
        round: 0,
    }

    const gamerStatus = {
        WINNER: 'winner',
        LOOSER: 'looser',
    }

    const gameStatus = {
        START: false,
        END: false,
    }

    // Set Gamer name
    while (!gameStatus.START) {
        let gamerName = prompt('Type your name: ');
        if (isValidName(gamerName).status) {
            gamer.name = gamerName;
            break;
        }
    }

    // start the game
    while (!gameStatus.START) {
        let gamerNumber = prompt("Guess number: ");
        gamer.round += 1;
        let number = parseInt(gamerNumber);
        if (isGuessed(number, guessedNumber) === 'is less') {
            console.log(`${number} is less than ${guessedNumber}`);
            guessedNumber = randomNumber(10, 0);
        }
        if (isGuessed(number, guessedNumber) === 'is great') {
            console.log(`${number} is great than ${guessedNumber}`);
            guessedNumber = randomNumber(10, 0);
        }
        if (isGuessed(number, guessedNumber) === 'is equal') {
            gamer.score += 20;
            gamer.status = gamerStatus.WINNER;
            alert('You win: +20pts');
            guessedNumber = randomNumber(10, 0);

            let continueOrNot = prompt("Would you wan to continue ?", 'Yes/No');
            if (continueOrNot.toLowerCase() === 'no' || continueOrNot === 'No') {
                gameStatus.START = !gameStatus.END;
            }
        }
    }
    alert(`${gamer.name} won ${gamer.score} pts after ${gamer.round} round${gamer.round > 1 ? 's' : ''}`);
}

main();