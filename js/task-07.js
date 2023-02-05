const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', (event) => {
    event.preventDefault();
    
    spanEl.style.fontSize = inputEl.value;
})