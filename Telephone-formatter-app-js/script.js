const userInput = document.querySelector('#user-input')

let previousValue = ''
let firstThreeNumber = ''
userInput.addEventListener('input', (e) => {
  const inputValue = e.target.value

  if(/\d+$/g.test(inputValue)){
     userInput.value = inputValue
  }
  else{
    userInput.value = inputValue.substring(0 , inputValue.length-1)
  }


  if (inputValue.length === 4 && previousValue.length < inputValue.length) {
    firstThreeNumber = inputValue.substring(0, 3)
    userInput.value = `+(${firstThreeNumber}) - ${inputValue[inputValue.length - 1] }`
  }
  else if(inputValue.length === 9 && previousValue.length > inputValue.length){
    userInput.value = firstThreeNumber
  }
  previousValue = inputValue
})
