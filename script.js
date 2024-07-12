// Query the necessary DOM elements
let rockBtn = document.querySelector(".rockbtn");
let paperBtn = document.querySelector(".paperbtn");
let scissorBtn = document.querySelector(".scissorbtn");
let playBtn = document.querySelector(".playbtn");
let resetBtn = document.querySelector(".resetbtn");
let result = document.querySelector(".result");
let winner = document.querySelector(".winner");
let hscore = document.querySelector(".hscore");
let cscore = document.querySelector(".cscore");

let humanScore = 0;
let computerScore = 0;
let drawCount = 0;

// Add event listener to play button
playBtn.addEventListener("click", () => {
  // Add event listeners to rock, paper, and scissor buttons
  rockBtn.addEventListener("click", function () {
    let resultValue = playRound("rock", getComputerChoice());
    checkScores(resultValue);
  });

  paperBtn.addEventListener("click", function () {
    let resultValue = playRound("paper", getComputerChoice());
    checkScores(resultValue);
  });

  scissorBtn.addEventListener("click", function () {
    let resultValue = playRound("scissor", getComputerChoice());
    checkScores(resultValue);
  });
});

resetBtn.addEventListener("click", () => {
  winner.textContent = "";
  hscore.textContent = 0;
  cscore.textContent = 0;
  result.textContent = "";
  humanScore = 0;
  computerScore = 0;
  drawCount = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function checkScores(result) {
  if (result == 1) {
    humanScore += 1;
    hscore.textContent = humanScore;
  } else if (result == -1) {
    computerScore += 1;
    cscore.textContent = computerScore;
  } else {
    drawCount += 1;
  }

  if (humanScore == 5) {
    winner.textContent = "Human wins with score: " + humanScore;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  } else if (computerScore == 5) {
    winner.textContent = "Computer wins with score: " + computerScore;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  } else if (drawCount == 5) {
    winner.textContent = "It's a Draw!";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  let humanWinner = 1;
  switch (humanChoice.toLowerCase()) {
    case "rock":
      if (computerChoice == "Paper") {
        result.textContent = "You Lose! Paper beats Rock!";
        humanWinner = -1;
      } else if (computerChoice == "Rock") {
        result.textContent = "Draw, You both Picked Rock.";
        humanWinner = 0;
      } else {
        result.textContent = "You Win";
      }
      return humanWinner;
    case "paper":
      if (computerChoice == "Scissor") {
        result.textContent = "You Lose! Scissor beats Paper!";
        humanWinner = -1;
      } else if (computerChoice == "Paper") {
        result.textContent = "Draw, You both Picked Paper.";
        humanWinner = 0;
      } else {
        result.textContent = "You Win";
      }
      return humanWinner;
    case "scissor":
      if (computerChoice == "Rock") {
        result.textContent = "You Lose! Rock beats Scissor!";
        humanWinner = -1;
      } else if (computerChoice == "Scissor") {
        result.textContent = "Draw, You both Picked Scissor.";
        humanWinner = 0;
      } else {
        result.textContent = "You Win";
      }
      return humanWinner;
    default:
      result.textContent = "Invalid Choice";
      return 0;
  }
}
