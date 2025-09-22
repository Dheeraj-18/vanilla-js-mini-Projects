const span = document.querySelector('span')

const wordsList = ['Developer.', 'programmer.', 'Engineer.']

// const word = 'Developer'

let wordIndex = 0
let charIndex = 0
let skipUpdate = 0
let reverseType = false

const intervalId = setInterval(() => {
  if (skipUpdate) {
    skipUpdate--
    return
  }
  if (!reverseType) {
    skipUpdate = 2
    span.innerText = span.innerText + wordsList[wordIndex][charIndex]
    charIndex++
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1)
    charIndex--
  }
  if (charIndex === wordsList[wordIndex].length) {
    skipUpdate = 6
    reverseType = true
  }
  if (span.innerText.length === 0 && reverseType) {
    reverseType = false
    wordIndex++
  }

  if (wordIndex === wordsList.length) {
    wordIndex = 0
  }
}, 100)
