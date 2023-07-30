const inputField = document.querySelector('#validation-input');
console.log(inputField);

inputField.addEventListener('blur', (event) => {
   if (event.currentTarget.value.length === Number(inputField.dataset.length)) {
      inputField.classList.remove('invalid');
      inputField.classList.add('valid');
   } else {
      inputField.classList.remove('valid');
      inputField.classList.add('invalid');
   };
});
