let playerScore = 0;
let robotScore = 0;
let tiesScore = 0;
let result = "";

// Robot selection between ROCK PAPER OR SCISSORS
function robotPlay(){
    let robotTurn = ["ROCK","PAPER", "SCISSORS"][Math.floor(Math.random() * 3)];
    return robotTurn;
}

// Game function
function game(){

    let imgs = document.querySelectorAll(".container-options img");
    imgs.forEach(img => {
        img.addEventListener("click", () => {
        let playerChoice = img.id;
        let robotChoice = robotPlay();
        playRound(playerChoice, robotChoice);

        // live update of the scores according to the result
        document.querySelector(".player-score").textContent = "Human: " +  playerScore;
        document.querySelector(".robot-score").textContent = "Robot: " +  robotScore;
        document.querySelector(".ties-score").textContent = "Ties: " +  tiesScore;
        document.querySelector(".round-p").textContent = "Result: " +  result;

        controllWins();
        })
    });
}

//outcome of each round played
function playRound(playerSelection, robotSelection){
let win = "You win!" + " You selected " + playerSelection + " and the robot selected " + robotSelection + ".";
let lose = "You lost!" + " You selected " + playerSelection + " and the robot selected " + robotSelection + ".";
let draw = "That's a draw!" + " You selected " + playerSelection + " and the robot selected " + robotSelection + ".";
    if(playerSelection === robotSelection){
        tiesScore++;
        result = draw;
    }else if((playerSelection === "ROCK") && (robotSelection === "PAPER")){
        robotScore++;
        result = lose;
    }else if((playerSelection === "ROCK") && (robotSelection === "SCISSORS")){
        playerScore++;
        result = win;
    }else if((playerSelection === "PAPER") && (robotSelection === "SCISSORS")){
        robotScore++;
        result = lose;
     }else if((playerSelection === "PAPER") && (robotSelection === "ROCK")){
        playerScore++;
        result = win;
    }else if((playerSelection === "SCISSORS") && (robotSelection === "PAPER")){
        playerScore++;
        result = win;
    }else{
        robotScore++;
        result = lose;
    }
}

//Function keep updating the result until 5 wins
function controllWins(){
    if(playerScore === 5){
        playerWin();
        invisibleImgs();
        }else if(robotScore === 5){
        robotWin();
        invisibleImgs();
    }
}

// Function when player wins
function playerWin(){
    const divContainer = document.querySelector(".container-score");
    // CREATE newDiv and its newPara for display who won in the end 
    const div = document.createElement("div");
    div.classList.add("newDiv");
    const divPara = document.createElement("p");
    divPara.classList.add("newPara");
    divPara.textContent = "You won! Thank you for saving humanity! :)";
    div.appendChild(divPara);
    divContainer.appendChild(div);
    playAgainButton(); 
}

// Function when robot wins
function robotWin(){
    const divContainer = document.querySelector(".container-score");
    // CREATE newDiv and its newPara for display who won in the end
    const div = document.createElement("div");
    div.classList.add("newDiv");
    const divPara = document.createElement("p");
    divPara.classList.add("newPara");
    divPara.textContent = "You lost ... The end is near :(";
    div.appendChild(divPara);
    divContainer.appendChild(div);
    playAgainButton();
}

//Function to make imgs/options invisibles
function invisibleImgs(){
    const containerHidden = document.querySelector(".container-options");
    containerHidden.style.visibility = "hidden";
}

function playAgainButton(){
    const divContainer = document.querySelector(".container-score");

    //CREATE PLAY AGAIN BUTTON
    const divPlayAgain = document.createElement("div");
    divPlayAgain.classList.add("divPlayAgain");
    const playAgain = document.createElement("button");
    playAgain.classList.add("playAgain");
    playAgain.textContent = "PLAY AGAIN";
    divPlayAgain.appendChild(playAgain);
    divContainer.appendChild(divPlayAgain);

    //PLAY AGAIN RESET
    playAgain.addEventListener('click', () => {
        location.reload();
        }) 

}

game();
