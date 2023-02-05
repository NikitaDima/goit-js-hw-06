const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', (event) => {
    event.preventDefault();
    if (nameInputEl.value === '') {
        return nameOutputEl.textContent = 'Anonymous';
    };
    
    nameOutputEl.textContent = nameInputEl.value;
});