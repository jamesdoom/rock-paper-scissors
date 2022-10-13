document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      let randomChoice = [
      "ROCK",
      "PAPER",
      "SCISSORS",
      ];
      let computerSelection = randomChoice[Math.floor(Math.random() * randomChoice.length)];
      //console.log(computerSelection);
      document.getElementById("c").innerHTML=computerSelection;
      let playerSelection=event.target.textContent;
      //console.log(playerSelection);
      document.getElementById("p").innerHTML=playerSelection;
      }
    });