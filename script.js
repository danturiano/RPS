let humanScore,
  computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3); //RETURNS 0,1,2
  if (computerChoice == 0) {
    return "Rock";
  } else if (computerChoice == 1) {
    return "Paper";
  } else return "Scissor";
}

function getHumanChoice() {
  let value = prompt("Choose between: Rock, Paper, Scissor");
  return value;
}

function playRound(humanChoice, computerChoice) {
  //Rock beats scissors, scissors beat paper, paper beats rock
  humanChoice.toLowerCase();
  switch (humanChoice) {
    case "rock":
      if (computerChoice == "Paper") {
        console.log("You Lose! Paper beats Rock!");
      } else console.log("You Win");
      break;
    case "paper":
      if (computerChoice == "Scissor") {
        console.log("You Lose! Scissor beats Paper!");
      } else console.log("You Win");
      break;
    case "scissor":
      if (computerChoice == "Rock") {
        console.log("You Lose! Rock beats Scissor!");
      } else console.log("You Win");
      break;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
