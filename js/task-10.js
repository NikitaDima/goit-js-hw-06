function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentsEl = document.querySelector('#controls');
const btnDestroy = parentsEl.lastElementChild;
const btnCreate = btnDestroy.previousElementSibling;
const inputEl = parentsEl.firstElementChild;
const boxesConteiner = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
  
  for(let i = 1; i <= inputEl.value; i += 1) {
    const addDiv = document.createElement('div');
    
  }
})



