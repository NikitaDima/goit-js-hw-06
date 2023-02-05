let counterValue = 0;
const addValue = document.querySelector('#value');


const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener('click', () => {
   counterValue -= 1;
   return addValue.textContent = counterValue;
    
});


const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    return addValue.textContent = counterValue;
});

