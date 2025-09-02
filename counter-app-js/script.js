const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const resetBtn = document.querySelector('.rst-btn')
const growthBy = document.querySelector('.growthby input')

minusBtn.addEventListener('click', () => {
  const countValue = parseInt(count.innerText)
  const growthValue = parseInt(growthBy.value)
  count.innerText = countValue - growthValue
})
plusBtn.addEventListener('click', () => {
  const countValue = parseInt(count.innerText)
  const growthValue = parseInt(growthBy.value)

  count.innerText = countValue + growthValue
})

resetBtn.addEventListener('click', () => {
  count.innerText = '0'
})
