const choices=["rock", "paper", "scissors"];
let wins =0, ties = 0 , losses = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    const winnerDiv = document.querySelector("#winner");
    const container = document.querySelector("#container");

    if (playerSelection == computerSelection){
        winnerDiv.textContent=("Tie!");
        return 'tie';

    }
    else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'scissors'){
            winnerDiv.textContent=('You lose!');
            return 'loss';
        }
    else{
        winnerDiv.textContent=('You win!');
        return 'win';

    }
    
}

function tallyResults(results){

    if(results == 'win') {
        wins += 1;
    }else if(results == "loss"){
        losses += 1;
    }else if(results == 'tie'){
        ties += 1;
    }    
    let total = wins + losses + ties
    if (total==5){
        gameOver();
    }
    
};    
    
    


function playGame(playerSelection){
    
        
        computerSelection = getComputerChoice();
     
        
        resultsDiv = document.querySelector("#results")
        resultsDiv.textContent = ("You chose " + playerSelection + ", I chose " + computerSelection + ".");
        results = playRound(playerSelection, computerSelection);
        tallyResults(results);


    
    };

function gameOver(){
    // buttons.forEach((button) => {
    //     button.removeEventListener("click", clickHandler);
    // });
    const container = document.querySelector("#container")
    finalResults = document.createElement('p')
    finalResults.innerHTML = "Results of five rounds:<br>Wins-" + wins + "  Losses-" + losses + "   Ties-" + ties;
    finalResults.classList = "final-results";
    container.appendChild(finalResults);
    wins = 0;
    losses = 0;
    ties = 0;
    
};


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", function clickHandler(){

        let playerSelection = button.textContent.toLowerCase();
        finalResults = document.querySelector(".final-results");

        if(finalResults){
            finalResults.parentNode.removeChild(finalResults)
        }
        console.log(playerSelection);
        playGame(playerSelection);
        }); 
    });


