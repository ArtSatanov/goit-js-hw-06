const form = document.querySelector('.login-form');



form.addEventListener('submit', formSubmit); 

function formSubmit(event) {
   event.preventDefault();

   const { elements: { email, password } } = event.currentTarget;

   if (email.value === '' || password.value === '') {
      return alert('Please fill out all empty fields');
   }
   

   const formData = {email: email.value, password: password.value};
   console.log(formData);
   event.currentTarget.reset();
};
