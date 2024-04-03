const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = button.textContent.toLowerCase();
        console.log(playerSelection);
        }); 
    });