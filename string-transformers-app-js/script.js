const userInputString = document.querySelector('#user-input')

const lowerCaseOutput = document.querySelector('#lower-case output')
const upperCaseOutput = document.querySelector('#upper-case output')
const camelCaseOutput = document.querySelector('#camel-case output')
const pascalCaseOutput = document.querySelector('#pascal-case output')
const snakeCaseOutput = document.querySelector('#snake-case output')
const kebabCaseOutput = document.querySelector('#kebab-case output')
const trimCaseOutput = document.querySelector('#trim-spaces output')

function makeCapitalizeFirstLetter(str) {
  if (!str || str.length === 0) return ''
  return str[0].toUpperCase() + str.slice(1, str.length)
}

function makeCapitalizeAllFirstLetter(str) {
  if (!str || str.length === 0) return ''

  return str[0].toUpperCase() + str.slice(1, str.length)
}

function toCamelcase(string) {
  const lowerCaseString = string.toLowerCase()
  const wordsArray = lowerCaseString.split(' ')
  const finalArray = wordsArray.map((word, index) => {
    if (index === 0) return word
    return makeCapitalizeFirstLetter(word)
  })
  return finalArray.join('')
}

function toPascalCase(string) {
  const lowerCaseString = string.toLowerCase()
  const wordsArray = lowerCaseString.split(' ')
  const finalArray = wordsArray.map((word, i) => {
    return makeCapitalizeAllFirstLetter(word)
  })
  return finalArray.join('')
}

function toSnakeCase(string) {
  const lowerCaseString = string.toLowerCase()
  const wordsArray = lowerCaseString.split(' ')
  const finalString = wordsArray.join('_')
  return finalString
}
function toKebabCase(string) {
  const lowerCaseString = string.toLowerCase()
  // const wordsArray = lowerCaseString.split(' ')
  // const finalString = wordsArray.join('-')
  // return finalString
  return lowerCaseString.replaceAll(' ', '-')
}

function toTrimSpaces(string) {
  const lowerCaseString = string.toLowerCase()
  return lowerCaseString.replaceAll(' ', '')
}

lowerCaseOutput.innerText = userInputString.value.toLowerCase()
upperCaseOutput.innerText = userInputString.value.toUpperCase()
camelCaseOutput.innerText = toCamelcase(userInputString.value)
pascalCaseOutput.innerText = toPascalCase(userInputString.value)
snakeCaseOutput.innerText = toSnakeCase(userInputString.value)
kebabCaseOutput.innerText = toKebabCase(userInputString.value)
trimCaseOutput.innerText = toTrimSpaces(userInputString.value)

userInputString.addEventListener('input', (e) => {
  lowerCaseOutput.innerText = e.target.value.toLowerCase()
  upperCaseOutput.innerText = e.target.value.toUpperCase()
  camelCaseOutput.innerText = toCamelcase(e.target.value)
  pascalCaseOutput.innerText = toPascalCase(e.target.value)
  snakeCaseOutput.innerText = toSnakeCase(e.target.value.trim())
  kebabCaseOutput.innerText = toKebabCase(e.target.value.trim())
  trimCaseOutput.innerText = toTrimSpaces(e.target.value)
})
