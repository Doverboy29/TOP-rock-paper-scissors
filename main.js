let playerScore = 0
let computerScore = 0

//get a randomized computer selection returning 1 of the 3 options
function getComputerSelection() {
  let answers = ['rock', 'paper', 'scissors']
  let randomize = Math.floor(Math.random() * 3)
  let selection = answers[randomize]
  return selection
}


//get players selection and verifies it is one of the 3 options
function getPlayerSelection() {
  let validAnswer = false

  while(!validAnswer) {
    let response = prompt('Rock, Paper, Scissors?').toLowerCase()
    if(response === 'rock' || response === 'paper' || response === 'scissors') {
      validAnswer = true
      return response
    }
  }
}

//compare both selections returning an alert with message about the results and increasing winners score by 1
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    return alert("It's a Tie!!")
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return alert(`You Win! ${playerSelection} beats ${computerSelection}`)
  } else if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
  }
}

//runs the playRound function 5 times and returning an alert on the results of the winner
function game() {
  for(i = 1; i <= 5; i++) {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerSelection()
    validAnswer = false

    playRound(playerSelection, computerSelection)

    if(playerScore === 3) {
      return alert("Congratulation's!! You Won!!")
    } else if(computerScore === 3) {
      return alert('Sorry!! You lost!!')
    }
  }

  if(playerScore === computerScore) {
    return alert('Round Over. Game is tied!!')
  } else if(playerScore > computerScore) {
    return alert(`Congratulation's!! You Won ${playerScore} - ${computerScore}`)
  } else if(playerScore < computerScore) {
    return alert(`Sorry!! You lost ${computerScore} - ${playerScore}`)
  }
}

game()
