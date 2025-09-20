const fullDarkModeCheckBox = document.querySelector('#full-dark-mode')
const containerDarkModeCheckBox = document.querySelector('#contain-dark-mode')
const Container = document.querySelector('.container')

fullDarkModeCheckBox.addEventListener('change', () => {
  if (fullDarkModeCheckBox.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  containerDarkModeCheckBox.checked = fullDarkModeCheckBox.checked
  changeContainedDarkMode()
})
function changeContainedDarkMode() {
  if (containerDarkModeCheckBox.checked) {
    Container.classList.add('dark')
  } else {
    Container.classList.remove('dark')
  }
}
containerDarkModeCheckBox.addEventListener('change', changeContainedDarkMode)
