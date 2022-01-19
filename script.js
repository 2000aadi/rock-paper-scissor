// variables that store player's and computer's choice
let computerChoice, playerChoice;


// const values used for showing results
const winSentence = "You Win! ", loseSentence = "You Lose! ";

// global score variable
let playerScore=0, computerScore=0, round=0;

// global variable res used between multiple functions
let res;

// array consisting of three possible choices
const values = ['Rock', 'Paper', 'Scissors'];

// marks computerChoice randomly from above values array.
function computerPlay (){
  //  console.log('function called');
    computerChoice = values[Math.floor(Math.random() * values.length)]; 
};



const style = 'font-weight : bold';

// round played between input value (Player) & computer value (Computer)
// result returned as string. 
function playRound (Player, Computer) {
    
    let playerVal = mapper(Player), compVal = mapper(Computer);
    res = result(playerVal, compVal);
    //console.log('playerVal is ' + playerVal);
    //console.log('compVal is ' + compVal);
    //console.log('playRound result is ' + res);

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
        if (playerNum==1 && compNum==3) return 1;
        else return -1;
    } else {
        if (playerNum==3 && compNum==1) return -1;
        else return 1;
    }
}

function game(){
    res=0;
    console.log("%cRound " + ++round, style);

    //playerChoice = prompt("Enter your choice from Rock, Paper or Scissors: ");
    computerPlay();
    while (playerChoice == computerChoice) computerPlay();

    //marks the computer choice to html 
    document.getElementById("choice").innerHTML = computerChoice;

    console.log("Your input is " + playerChoice);
    console.log("Computer's choice is " + computerChoice);

    let verdict = playRound(playerChoice, computerChoice);
    console.log("%c" + verdict, style);

    //marks the verdict in html
    document.getElementById('result').innerHTML = verdict;

    if (res==1) ++playerScore;
    else ++computerScore;

    //marks playerScore & computerScores in html
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;

    console.log("%cYour score is " + playerScore, "color:red;");
};


const rockBtn = document.querySelector('#rockContainer');
rockBtn.addEventListener('click', () => {
    //console.log('rock button working');
    playerChoice = 'Rock';
    game();
});

const paperBtn = document.querySelector('#paperContainer');
paperBtn.addEventListener('click', () => {
    //console.log('paper button working');
    playerChoice = 'Paper';
    game();
});


const scissorsBtn = document.querySelector('#scissorsContainer');
scissorsBtn.addEventListener('click', () => {
    //console.log('rock button working');
    playerChoice = 'Scissors';
    game();
});


// calling functions
//computerPlay();
