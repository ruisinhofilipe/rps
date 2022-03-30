let playerScore = 0;
let robotScore = 0;
let tiesScore = 0;

// Robot selection between ROCK PAPER OR SCISSORS
function robotPlay(){
    let robotTurn = ["ROCK","PAPER", "SCISSORS"][Math.floor(Math.random() * 3)];
    return robotTurn;
}


function game(){
    let imgs = document.querySelectorAll(".container-options img");
    imgs.forEach(img => {
        img.addEventListener("click", () => {
        playerChoice = img.id;
        const robotChoice = robotPlay();
        playRound(playerChoice, robotChoice);

        // live update of the scores according to the games
        document.querySelector(".player-score").textContent = "Human: " +  playerScore;
        document.querySelector(".robot-score").textContent = "Robot: " +  robotScore;
        document.querySelector(".ties-score").textContent = "ties: " +  tiesScore;
        // document.querySelector(".round-p").textContent = "Result: " +  playRound(playerChoice, robotChoice);

        controllWins();
        })
    });
}

//outcome of each round played

function playRound(playerSelection, robotSelection){
let win = "You win!" + " You selected " + playerSelection + " and the robot selected " + robotSelection + "."
let lose = "You lost!" + " You selected " + playerSelection + " and the robot selected: " + robotSelection + "."
let draw = "That's a draw!" + " You selected " + playerSelection + " and the robot selected " + robotSelection + "."

    if(playerSelection === robotSelection){
        tiesScore++;
        console.log(draw);
    }else if((playerSelection === "ROCK") && (robotSelection === "PAPER")){
        robotScore++;
        console.log(lose);
    }else if((playerSelection === "ROCK") && (robotSelection === "SCISSORS")){
        playerScore++;
        console.log(win);
    }else if((playerSelection === "PAPER") && (robotSelection === "SCISSORS")){
        robotScore++;
        console.log(lose);
     }else if((playerSelection === "PAPER") && (robotSelection === "ROCK")){
        playerScore++;
        console.log(win);
    }else if((playerSelection === "SCISSORS") && (robotSelection === "PAPER")){
        playerScore++;
        console.log(win);
    }else{
        robotScore++;
        console.log(lose);
    }
}

function controllWins(){
    if(playerScore === 5){
        alert("You Won!")
    }else if(robotScore === 5){
        alert("Robot Won!")
    }
}
game();