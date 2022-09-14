let numberOfRounds = 0
let winningScore = 0
let playerScore = 0
let computerScore = 0
let playerSelection = ''
const winningMessage = "Congratulation's!! You Won!!"
const losingMessage = "Sorry... You lost!!"

const options = document.querySelectorAll('.weapon-selection')
const roundSelection = document.querySelectorAll('.round-selection')
const container = document.querySelector('#container')
const rounds = document.querySelector('#rounds')
const roundsContainer = document.querySelector('#rounds-container')
const playerTally = document.querySelector('#player-score')
const computerTally = document.querySelector('#computer-score')
const scoreContainer = document.querySelector('#score-container')
const verdict = document.querySelector('#verdict')

const weapons = {
  Rock: {
    strongAgainst: 'Scissors'
  },
  Paper: {
    strongAgainst: 'Rock'
  },
  Scissors: {
    strongAgainst: 'Paper'
  }
}
//eventListeners for players choice of rounds
for (const round of roundSelection) {
  round.addEventListener('click', function(event) {
    numberOfRounds = event.target.id
    winningScore = Math.ceil(numberOfRounds/2)
    container.style.display = 'block'
    scoreContainer.style.display = 'block'
    roundsContainer.style.display = 'none'
  })
}
//eventListeners for the players weapon choice
for (const option of options) {
  option.addEventListener('click', function (event) {
    playerSelection = event.target.id

    game()
  })
}
//get a randomized computer selection returning 1 of the 3 options
function getComputerSelection() {
  let answers = ['Rock', 'Paper', 'Scissors']
  let randomize = Math.floor(Math.random() * 3)
  let selection = answers[randomize]
  return selection
}
//displays message for players round verdict
function roundVerdict (message) {
  if(numberOfRounds == 1) return
  verdict.innerHTML = message
  setTimeout(() => {
    verdict.innerHTML = ''
  }, 1000)
}
//compare both selections returning a message about the results and increasing winners score by 1
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let message = "It's a Tie"
    roundVerdict(message)
  } else if (weapons[playerSelection].strongAgainst === computerSelection) {
    playerScore++
    playerTally.innerHTML = playerScore
    let message = `You Win! ${playerSelection} beats ${computerSelection}`
    roundVerdict(message)
  } else {
    computerScore++
    computerTally.innerHTML = computerScore
    let message = `You Lose! ${computerSelection} beats ${playerSelection}`
    roundVerdict(message)
  }
}
//displays final verdict with a delay to print message out 1 letter at a time
function finalVerdict(verdictMessage) {
  for (let i = 0; i < verdictMessage.length; i++) {
    setTimeout(() => {
        verdict.innerHTML += verdictMessage[i];
    }, i * 100);
  }
}
//runs the playRound function 5 times and returning a message on the results of the winner
function game() {
  let computerSelection = getComputerSelection()

  playRound(playerSelection, computerSelection)

  if(numberOfRounds == 1) {
    container.style.display = 'none'
    if(playerScore > computerScore) {
      finalVerdict(winningMessage)
    } else if(computerScore > playerScore){
      finalVerdict(losingMessage)
    }
  } else if(playerScore == winningScore) {
    container.style.display = 'none'
    finalVerdict(winningMessage)
  } else if(computerScore == winningScore) {
    container.style.display = 'none'
    finalVerdict(losingMessage)
  } else {
    numberOfRounds--
    playerSelection = ''
  }
}