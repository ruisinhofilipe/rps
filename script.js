
function startGame(){
    let imgs = document.querySelectorAll("img")
    imgs.forEach((img) => 
        img.addEventListener(("click"), () => {
            if(img.id){
            playRound(img.id, computerSelection);
            }
        })
    );
}

function computerPlay(){
    let computerTurn = ["ROCK","PAPER", "SCISSORS"][Math.floor(Math.random() * 3)];
    return computerTurn;
}

const computerSelection = computerPlay();

function playRound(playerSelection,computerSelection){
    if(
        playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER"
      ){  
        console.log("Player won! " + "You chose: " + playerSelection + ". Computer went with: " + computerSelection);        
    }else if (
        playerSelection == computerSelection
    ){
        console.log("Draw!" + " You chose: " + playerSelection + ". Computer went with: " + computerSelection);
    }else{
        console.log("Computer Won." + " You chose: " + playerSelection + ". Computer went with: " + computerSelection);
    }
}

startGame();




