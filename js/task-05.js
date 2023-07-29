const inputField = document.querySelector('#name-input');
console.log(inputField);
const outputField = document.querySelector('#name-output');
console.log(outputField);

inputField.addEventListener('input', (event) => {
   if (event.currentTarget.value.trim === '') {
      outputField.textContent = 'Anonymous'
   } else {
      outputField.textContent = event.currentTarget.value
   }
});

