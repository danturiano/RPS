let humanScore,
  computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3); //RETURNS 0,1,2
  if (computerChoice == 0) {
    return "Rock";
  } else if (computerChoice == 1) {
    return "Paper";
  } else return "Scissors";
}

function getHumanChoice() {
  let value = prompt("Choose between: Rock, Paper, Scissors");
  value = value.charAt(0).toUpperCase() + value.slice(1);
  if (value === "Rock" || value === "Paper" || value === "Scissors") {
    //WILL ONLY RETURN TRUE IF ONE OF THE CHOICES IS TRUE
    return value;
  } else {
    console.log("Choice is not a valid must be Rock, Paper, or Scissors Only.");
  }
}
