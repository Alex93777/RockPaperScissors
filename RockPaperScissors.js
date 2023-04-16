function rockPaperScissor(playerTurn) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    if (playerTurn == 'r' || playerTurn == 'rock') {
        playerTurn = rock;
        console.log('You choose Rock');
    } else if (playerTurn == 'p' || playerTurn == 'paper') {
        playerTurn = paper;
        console.log('You choose Paper');
    } else if (playerTurn == 's' || playerTurn == 'scissors') {
        playerTurn = scissors;
        console.log('You choose Scissors');
    } else {
        console.log('Invalid Input. Try Again...');
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerTurn = computerRandomNumber

    switch (computerTurn) {
        case 1:
            computerTurn = "Rock";
            break;
        case 2:
            computerTurn = 'Paper';
            break;
        case 3:
            computerTurn = 'Scissors';
            break;
    }
    console.log(`The computer chooses ${computerTurn}`);

    if ((playerTurn === rock && computerTurn === scissors) ||
        (playerTurn === paper && computerTurn === rock) ||
        (playerTurn === scissors && computerTurn === paper)) {
        console.log('You win!');
    } else if ((playerTurn === rock && computerTurn === paper) ||
        (playerTurn === paper && computerTurn === scissors) ||
        (playerTurn === scissors && computerTurn === rock)) {
        console.log('You lose!');
    } else {
        console.log('This game was a draw!');
    }
}
rockPaperScissor('p')