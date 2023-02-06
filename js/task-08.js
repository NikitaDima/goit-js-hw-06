const loginFormEl = document.querySelector('.login-form');


loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: {email, password} 
     } = event.currentTarget;
    console.log(`Значення email: ${email.value}`);
    console.log(`Значення password: ${password.value}`);

    if(email.value === '' || password.value === '') {
       return alert('Всі поля мають бути заповнені');
    }
    loginFormEl.reset();
})