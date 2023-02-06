const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (event) => {
    inputEl.classList.remove('valid', 'invalid');

    if(inputEl.value.length >= inputEl.dataset.length) {
        return inputEl.classList.add('valid');
    } 
   
    return inputEl.classList.add('invalid');   
    
})