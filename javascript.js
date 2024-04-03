const choices=["rock", "paper", "scissors"];
let wins =0, ties = 0 , losses = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
        console.log("Tie!");
        return 'tie';

    }
    else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'paper' && computerSelection == 'scissors'){
            console.log('You lose!');
            return 'loss';
        }
    else{
        console.log('You win!');
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
    if (total == 5){
        gameOver();
    }
    
    console.log("Results:  Wins-" + wins + " Losses-" + losses + " Ties-" + ties);
};    
    
    


function playGame(playerSelection){
    
        
        computerSelection = getComputerChoice();
     
        
 
        console.log("You chose " + playerSelection + ", Computer chose " + computerSelection)
        results = playRound(playerSelection, computerSelection);
        tallyResults(results);      
    
    };

function gameOver(){
    // buttons.forEach((button) => {
    //     button.removeEventListener("click", clickHandler);
    // });
    div = document.querySelector("div")
    finalResults = document.createElement('p')
    finalResults.textContent = "Results:  Wins-" + wins + " Losses-" + losses + " Ties-" + ties;
    div.appendChild(finalResults);
    console.log("Results:  Wins-" + wins + " Losses-" + losses + " Ties-" + ties);
};


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", function clickHandler(){
        let playerSelection = button.textContent.toLowerCase();
        console.log(playerSelection);
        playGame(playerSelection);
        }); 
    });


console.log("Results:  Wins-" + wins + " Losses-" + losses + " Ties-" + ties);
