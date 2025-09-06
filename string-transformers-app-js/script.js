const userInputString = document.querySelector('#user-input')

const lowerCaseOutput = document.querySelector('#lower-case output')
const upperCaseOutput = document.querySelector('#upper-case output')

lowerCaseOutput.innerText = userInputString.value.toLowerCase()
upperCaseOutput.innerText = userInputString.value.toUpperCase()

userInputString.addEventListener('input', (e) => {
  lowerCaseOutput.innerText = e.target.value.toLowerCase()
  upperCaseOutput.innerText = e.target.value.toUpperCase()
})
