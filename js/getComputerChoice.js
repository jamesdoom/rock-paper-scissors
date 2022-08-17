//corrected variable names

let computerChoice = [
    "Rock",
    "Paper",
    "Scissors",
];

let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
let computerSelection = randomChoice.toUpperCase(); //added uppercase conversion to compare to playerSelection

console.log(computerSelection);