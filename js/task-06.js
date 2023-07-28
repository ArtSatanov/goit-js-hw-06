const inputField = document.querySelector('#validation-input');
console.log(inputField);

inputField.addEventListener('blur', (event) => {
   if (event.currentTarget.value.length < inputField.dataset.length) {
      inputField.classList.add('invalid');
   } else {
      inputField.classList.add('valid');
   };
});