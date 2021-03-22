const input = document.getElementById('input'),
output = document.getElementById('output'),
limitField = document.getElementById('limit')
errorField = document.querySelector('.error')

let LIMIT = 8;

window.onload =  function() {
  limitField.value = LIMIT
}

// Метод валидации последовательности
function validate(text = '') {
  // Проверка на буквы
  if (/[a-zа-я]/gi.test(text)) {
    errorField.textContent = 'Ваша последовательность содержит букву'
    return false
  }
  // Проверка на лимит 
  if (text.length > LIMIT) {
    errorField.textContent = `Лимит равен ${LIMIT}`
    return false
  }
  // Проверка на 1 и 0
  if (/[2-9]/g.test(text)) {
    errorField.textContent = 'Последовательность должна включать либо 1, либо 0'
    return
  }

  return true
}


function convert(sequence = '') {
  const splitted = [...sequence],
  sequenceLength = splitted.length

  let result = 0

  for (let i = sequenceLength - 1; i >= 0; i--) {
    const digit = Number(splitted[sequenceLength - i - 1])
    result += digit * Math.pow(2, i)
  }

  return result
}


input.addEventListener('input', ({ target: { value } }) => {
  if (validate(value)) {
    errorField.textContent = ''
    const result = convert(value)
    output.value = result
  } else {
    output.value = ''
  }
})

limitField.addEventListener('change', ({ target: { value } }) => {
  console.log(value)
  LIMIT = Number(value)
})