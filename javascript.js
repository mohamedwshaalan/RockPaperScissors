function getComputerChoice(){
  let randomnumber = Math.floor(Math.random()*10)
  let result = "Default"
  if(randomnumber>=0 && randomnumber<=3){
     result = "Paper";
  }
  if(randomnumber>3 && randomnumber <=6){
     result = "Rock";
  }
  if(randomnumber>6 && randomnumber <=9){
    result = "Scissors";
  }
  return result;
}

function playRound(playerselection, computerselection){
  let result = "Default"
  let boolresult = false
  if(playerselection===computerselection){
    result = "It's a " + playerselection + " Draw!"
  }
  if(playerselection==="Scissors" && computerselection==="Paper"){
    result = "You win! " + playerselection + " beats " + computerselection + "!"
    boolresult = true
  }
  if(playerselection==="Paper" && computerselection==="Scissors"){
    result = "You lose! " + computerselection + " beats " + playerselection + "!"
  }
  if(playerselection==="Rock" && computerselection==="Scissors"){
    result = "You win! " + playerselection + " beats " + computerselection + "!"
    boolresult = true
  }
  if(playerselection==="Scissors" && computerselection==="Rock"){
    result = "You lose! " + computerselection + " beats " + playerselection + "!"
  }
  if(playerselection==="Paper" && computerselection==="Rock"){
    result = "You win! " + playerselection + " beats " + computerselection + "!"
    boolresult = true
  }
  if(playerselection==="Rock" && computerselection==="Paper"){
    result = "You lose! " + computerselection + " beats " + playerselection + "!"
  }
  console.log(result)
  return boolresult;
}

function fullGame(){

  let userScore = 0;
  
  for(let i =0;i<5;i++){
    let computerselection = getComputerChoice()
    let playerselection = prompt("Enter your choice:")
   if(playRound(playerselection,computerselection)===true){
    userScore++;
   } 
    
  }
  if(userScore<=2){
    console.log("The computer won the game!")
  }
  else{
    console.log("You won the game!")
  }
}
fullGame();