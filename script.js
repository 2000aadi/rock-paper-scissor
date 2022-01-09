let computerChoice, playerChoice;

function computerPlay (){
    return Math.floor(Math.random()*3+1);
};

// 1=rock, 2=paper, 3=scissor;
let compNum = computerPlay();
let playerNum = prompt("Enter between 1 to 3: ");

function mapper (num) {
    if (num == 1) return 'rock';
    else if (num == 2) return 'paper';
    else if (num ==3) return 'scissor';
    else return 'invalid selection';
}

computerChoice = mapper(compNum);
playerChoice = mapper(playerNum);

console.log("your input is " + playerChoice);
console.log("Computer choice is " + computerChoice);

function result (playerNum, compNum)  {
    if (playerNum==compNum) return "Match tied";
    else if (playerNum < compNum){
        if (playerNum==1 && compNum==3) return "You Won";
        else return "You lost";
    } else {
        if (playerNum==3 && compNum==1) return "You lost";
        else return "You won";
    }
}

let matchResult = result (playerNum, compNum);

console.log(matchResult);
