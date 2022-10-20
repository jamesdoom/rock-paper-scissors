document.body.addEventListener("click", event => {
    if (event.target.nodeName=="BUTTON") {
    let randomChoice=[
      "ROCK",
      "PAPER",
      "SCISSORS",
      ];
    let computerSelection=randomChoice[Math.floor(Math.random() * randomChoice.length)];
    document.getElementById("c").innerHTML=computerSelection;
    let playerSelection=event.target.textContent;
    document.getElementById("p").innerHTML=playerSelection;
    let result=play(playerSelection, computerSelection);    
    document.getElementById("r").innerHTML=result;
    document.getElementById("pd").innerHTML=pScore;
    document.getElementById("cd").innerHTML=cScore;
    }
    if (pScore===scoreLimit) {
    document.getElementById("pWin").innerHTML=pWin;
    } if (cScore===scoreLimit){
    document.getElementById("cWin").innerHTML=cWin;
    }
});
    let pScore=0;
    let cScore=0;
    let pWin="YOU WIN!";
    let cWin="COMPUTER WINS!";
    let scoreLimit=5;
    
function play(playerSelection, computerSelection) {
    let outcome=["YOU WIN!", "COMPUTER WINS!", "IT'S A TIE!"];
    if (playerSelection===computerSelection) {
          return outcome[2]; 
    } else if (playerSelection==="ROCK" && computerSelection==="SCISSORS") {
        pScore++;
        return outcome[0];
    } else if (playerSelection==="PAPER" && computerSelection==="ROCK") {
          pScore++;
          return outcome[0];
    } else if (playerSelection==="SCISSORS" && computerSelection==="PAPER") {
          pScore++;
          return outcome[0];
    } else
          cScore++;
          return outcome[1];
};