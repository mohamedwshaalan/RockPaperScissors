let userScore = 0;
let computerScore = 0;

const choicebuttons = document.querySelectorAll('button');

choicebuttons.forEach(button => {
  button.addEventListener('click', function () {
    playRound(button.className)
  })
})

function getComputerChoice() {
  let randomnumber = Math.floor(Math.random() * 10)
  let result = "Default"
  if (randomnumber >= 0 && randomnumber <= 3) {
    result = "Paper";
  }
  if (randomnumber > 3 && randomnumber <= 6) {
    result = "Rock";
  }
  if (randomnumber > 6 && randomnumber <= 9) {
    result = "Scissors";
  }
  return result;
}
function endGame() {
  choicebuttons.forEach(elem => { elem.disabled = true })
}
function playRound(playerselection) {
  let result = "";
  let computerselection = getComputerChoice();
  if (playerselection === computerselection) {
    result = ("It's a " + playerselection + " Draw!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")
  }
  if (playerselection === "Scissors" && computerselection === "Paper") {
    userScore++;
    result = ("<p>You win! " + playerselection + " beats " + computerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")


  }
  if (playerselection === "Paper" && computerselection === "Scissors") {
    computerScore++;
    result = ("<p>You lose! " + computerselection + " beats " + playerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")

  }
  if (playerselection === "Rock" && computerselection === "Scissors") {
    userScore++;
    result = ("<p>You win! " + playerselection + " beats " + computerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")


  }
  if (playerselection === "Scissors" && computerselection === "Rock") {
    computerScore++;
    result = ("<p>You lose! " + computerselection + " beats " + playerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")


  }
  if (playerselection === "Paper" && computerselection === "Rock") {
    userScore++;
    result = ("<p>You win! " + playerselection + " beats " + computerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")

  }
  if (playerselection === "Rock" && computerselection === "Paper") {
    computerScore++;
    result = ("<p>You lose! " + computerselection + " beats " + playerselection + "!"
      + "<br>User Score: " + userScore
      + "<br>Computer Score: " + computerScore + "</p>")

  }
  if (userScore === 5) {
    result = "You won the game! Refresh the page to play again."
    endGame();
  }
  if (computerScore === 5) {
    result = "You lost the game! Refresh the page to play again."
    endGame();
  }

  document.getElementById('result-box').innerHTML = result;
  return;
}





