let computerChoice, playerChoice;
let winSentence = "You Win! ", loseSentence = "You Lose! ";
let res, score=0;


const values = ['Rock', 'Paper', 'Scissors'];

// marks computerChoice randomly from above values array.
function computerPlay (){
    computerChoice = values[Math.floor(Math.random() * values.length)]; 
};


// round played between input value (playerSelection) & computer value (computerSelection)
// result returned as string. 
function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let Player = player.charAt(0).toUpperCase() + player.slice(1);
    let computer = computerSelection.toLowerCase();
    let Computer = computer.charAt(0).toUpperCase() + computer.slice(1);

    let playerVal = mapper(Player), compVal = mapper(Computer);
    res = result(playerVal, compVal);

    if (playerVal == 4) return "Please input a valid value. You entered " + Player + '!';

    if (res == -1){
        return loseSentence + Computer + ' beats ' + Player;
    } else if (res == 1){
        return winSentence + Player + ' beats ' + Computer;
    } else {
        return 'Match Tied!';
    }
}

// maps value of rock, paper and scissors to 1, 2 and 3 respectively
function mapper (value) {
    if (value == 'Rock') return 1;
    else if (value == 'Paper') return 2;
    else if (value == 'Scissors') return 3;
    else return 4;
}

// returns the result of a match. 0 = player lost, 1 = match tied, 2 = player won
function result (playerNum, compNum)  {
    if (playerNum==compNum) return 0;
    else if (playerNum < compNum){
        if (playerNum==1 && compNum==3) return 2;
        else return -1;
    } else {
        if (playerNum==3 && compNum==1) return 0;
        else return 1;
    }
}

function game(){
    score=0; res=0;
    for (let i=0; i<=4; i++){
        console.log("Round " + (i+1));

        playerChoice = prompt("Enter your choice from Rock, Paper or Scissors: ");
        computerPlay();

        console.log("Your input is " + playerChoice);
        console.log("Computer's choice is " + computerChoice);

        console.log(playRound(playerChoice, computerChoice));
        if (res==1) ++score;
        console.log("Your score is " + score);
    }
}

game();