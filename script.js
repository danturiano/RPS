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
  let humanWinner = 1;
  switch (humanChoice) {
    case "rock":
      if (computerChoice == "Paper") {
        console.log("You Lose! Paper beats Rock!");
        humanWinner = -1;
      } else if (computerChoice == "Rock") {
        console.log("Draw, You both Picked Rock.");
        humanWinner = 0;
      } else console.log("You Win");
      return humanWinner;
    case "paper":
      if (computerChoice == "Scissor") {
        console.log("You Lose! Scissor beats Paper!");
        humanWinner = -1;
      } else if (computerChoice == "Paper") {
        console.log("Draw, You both Picked Paper.");
        humanWinner = 0;
      } else console.log("You Win");
      return humanWinner;
    case "scissor":
      if (computerChoice == "Rock") {
        console.log("You Lose! Rock beats Scissor!");
        humanWinner = -1;
      } else if (computerChoice == "Scissor") {
        console.log("Draw, You both Picked Scissor.");
        humanWinner = 0;
      } else console.log("You Win");
      return humanWinner;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let drawCount = 0;
  let rounds = 0;
  while (rounds != 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    if (winner == 1) {
      humanScore++;
    } else if (winner == 0) {
      drawCount++;
    } else computerScore++;
    rounds++;
  }
  if (humanScore > computerScore) {
    console.log("You are the Winner!");
  } else if (drawCount == 5) {
    console.log("There is no Winner!");
  } else console.log("You Lose, Try Again Next Time!");
}

playGame();

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
