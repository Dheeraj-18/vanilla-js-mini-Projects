const fullDarkModeCheckBox = document.querySelector('#full-dark-mode')
const containerDarkModeCheckBox = document.querySelector('#contain-dark-mode')
const Container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckBox'))
const isContainerDarkMode = JSON.parse(
  localStorage.getItem('containerDarkModeCheckBox')
)

if (isFullDarkMode) {
  fullDarkModeCheckBox.checked = true
}
if (isContainerDarkMode) {
  containerDarkModeCheckBox.checked = true
}

changeFullDarkMode()
changeContainedDarkMode()

fullDarkModeCheckBox.addEventListener('change', () => {
  changeFullDarkMode()
  changeContainedDarkMode()
})

function changeFullDarkMode() {
  changeTheme(fullDarkModeCheckBox, document.body, 'fullDarkModeCheckBox')
}
function changeContainedDarkMode() {
  changeTheme(containerDarkModeCheckBox, Container, 'containerDarkModeCheckBox')
}

// Here write a reusable function 
function changeTheme(checkbox, element, LocalStorageKey) {
  if (checkbox.checked) {
    element.classList.add('dark')
    localStorage.setItem(LocalStorageKey, true)
  } else {
    element.classList.remove('dark')
    localStorage.setItem(LocalStorageKey, false)
  }
}
containerDarkModeCheckBox.addEventListener('change', changeContainedDarkMode)
