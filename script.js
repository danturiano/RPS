function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); //RETURNS 0,1,2
  if (computerChoice == 0) {
    return "Rock";
  } else if (computerChoice == 1) {
    return "Paper";
  } else return "Scissors";
}
