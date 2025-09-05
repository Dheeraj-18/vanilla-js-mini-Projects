const userGuessNumber = document.querySelector('#user-guess')
const submitBtn = document.querySelector('.submit-btn')
const newGameBtn = document.querySelector('.new-game-btn')
const form = document.querySelector('form')
const resultStatement = document.querySelector('.result')
const allGuessesNumbers = document.querySelector('.all-guesses')

function a() {
  let allGuessArray = []

  let randomGuessNumber = Math.round(Math.random() * 100)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInputValue = parseInt(userGuessNumber.value)
    if (userInputValue < randomGuessNumber) {
      resultStatement.innerText = `${userInputValue} is too low!`
    } else if (userInputValue > randomGuessNumber) {
      resultStatement.innerText = `${userInputValue} is too high!`
    } else {
      resultStatement.innerText = `You got it! Congrats The No. was ${randomGuessNumber}`
      newGameBtn.disabled = false
      submitBtn.disabled = true
    }
    allGuessArray.push(userInputValue)
    allGuessesNumbers.innerText = 'Your guesses: ' + allGuessArray.join(', ')
    form.reset()
  })

  newGameBtn.addEventListener('click', () => {
    resultStatement.innerText = ``
    allGuessArray.length = 0
    allGuessesNumbers.innerText = ``
    newGameBtn.disabled = true
    submitBtn.disabled = false
    randomGuessNumber = Math.round(Math.random() * 100)
  })
}

a()
