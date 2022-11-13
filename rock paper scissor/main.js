function getComputerChoice() {
    const items = ["Rock", "Paper", "Scissor"];
    const choice = items[Math.floor(Math.random() * 3)];
    return choice.toLowerCase();
}


const buttons = Array.from(document.getElementsByClassName('btn'));
console.log(buttons)

buttons.forEach(button => button.addEventListener('click', play));

const screen = document.getElementById('screen');
const score = document.getElementById('score');
const btnpar = document.getElementById('btnpar');
const reset = document.getElementById('reset');
reset.disabled=true;
p=0;
c=0;
function disablebtn(){
    buttons.forEach(button => button.disabled=true);
    reset.disabled=false;
    reset.addEventListener('click', ()=>{
        buttons.forEach(button => button.disabled=false);
        c=0;
        p=0;
        screen.textContent='';
        score.textContent='';
        reset.disabled=true;
    });
};
function play() {
    compChoice = getComputerChoice();
    plyrChoice = this.textContent;

    if (compChoice == plyrChoice) {
        screen.textContent = compChoice + " vs " + plyrChoice + " it's a tie!";
        score.textContent = `${c} - ${p}`
    }
    else {
        if (compChoice == "rock") {
            if (plyrChoice == "scissor") {
                screen.textContent = compChoice + " vs " + plyrChoice + " you lose";
                score.textContent = `${c+=1} - ${p}`
            }
            else {
                screen.textContent = compChoice + " vs " + plyrChoice + " you win!";
                score.textContent = `${c} - ${p+=1}`
            }
        }
        else if (compChoice == "paper") {
            if (plyrChoice == "scissor") {
                screen.textContent = compChoice + " vs " + plyrChoice + " you win!";
                score.textContent = `${c} - ${p+=1}`
            }
            else {
                screen.textContent = compChoice + " vs " + plyrChoice + " you lose";
                score.textContent = `${c+=1} - ${p}`
            }
        }
        else if (compChoice == "scissor") {
            if (plyrChoice == "rock") {
                screen.textContent = compChoice + " vs " + plyrChoice + " you win!";
                score.textContent = `${c} - ${p+=1}`
            }
            else {
                screen.textContent = compChoice + " vs " + plyrChoice + " you lose";
                score.textContent = `${c+=1} - ${p}`
            }
        }
    }
    if(p==2){
        score.textContent = "PLAYER WINS WOHO"
        disablebtn();
    }
    else if(c==2){
        score.textContent = "Computer wins :("
        disablebtn();
    }
}
