let numberOfRounds = 0
let playerScore = 0
let computerScore = 0
let playersSelection = ''

const options = document.querySelectorAll('.weapon-selection')
const roundSelection = document.querySelectorAll('.round-selection')
//const startButton = document.getElementById('button')
const container = document.getElementById('container')
const rounds = document.getElementById('rounds')
const roundsContainer = document.getElementById('rounds-container')
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
/*
startButton.addEventListener('click', function(event) {
  numberOfRounds = rounds.value
  console.log(numberOfRounds)
  container.style.display = 'block'
  roundsContainer.style.display = 'none'
})
*/
for (const round of roundSelection) {
  round.addEventListener('click', function(event) {
    numberOfRounds = event.target.id
    container.style.display = 'block'
    roundsContainer.style.display = 'none'
  })
}

for (const option of options) {
  option.addEventListener('click', function (event) {
    playersChoice = event.target.id
    console.log(playersChoice)
  })
}
//get a randomized computer selection returning 1 of the 3 options
function getComputerSelection() {
  let answers = ['Rock', 'Paper', 'Scissors']
  let randomize = Math.floor(Math.random() * 3)
  let selection = answers[randomize]
  return selection
}
//compare both selections returning an alert with message about the results and increasing winners score by 1
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return alert("It's a Tie!!")
  } else if (weapons[playerSelection].strongAgainst === computerSelection) {
    playerScore++
    return alert(`You Win! ${playerSelection} beats ${computerSelection}`)
  } else {
    computerScore++
    return alert(`You Lose! ${computerSelection} beats ${playerSelection}`)
  }
}

//runs the playRound function 5 times and returning an alert on the results of the winner
function game() {
  for (i = 1; i <= 5; i++) {
    let playerSelection = getPlayerSelection()
    let computerSelection = getComputerSelection()
    validAnswer = false

    playRound(playerSelection, computerSelection)

    if (playerScore === 3) {
      return alert("Congratulation's!! You Won!!")
    } else if (computerScore === 3) {
      return alert('Sorry!! You lost!!')
    }
  }

  if (playerScore === computerScore) {
    return alert('Round Over. Game is tied!!')
  } else if (playerScore > computerScore) {
    return alert(`Congratulation's!! You Won ${playerScore} - ${computerScore}`)
  } else if (playerScore < computerScore) {
    return alert(`Sorry!! You lost ${computerScore} - ${playerScore}`)
  }
}