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
    if (results == 'win') {
        wins += 1;
    }
    if (results == "loss"){
        losses += 1;
    }
    if (results == 'tie'){
        ties += 1;
    }}



 

function playGame(playerSelection){
    


        // while (!choices.includes(playerSelection)) {
        //     console.log("That is not an option, try again.");
        //     playerSelection = prompt("Choose rock, paper or scissors: ").trim().toLowerCase();
        //  }  
        
        computerSelection = getComputerChoice();
     
        
 
        console.log("You chose " + playerSelection + ", Computer chose " + computerSelection)
        results = playRound(playerSelection, computerSelection);
        tallyResults(results);      
    
    };




const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.textContent.toLowerCase();
        console.log(playerSelection);
        playGame(playerSelection);
        }); 
    });


console.log("Results:  Wins-" + wins + " Losses-" + losses + " Ties-" + ties);