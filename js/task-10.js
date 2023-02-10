function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const parentsEl = document.querySelector('#controls');
const btnDestroy = parentsEl.lastElementChild;
const btnCreate = btnDestroy.previousElementSibling;
const inputEl = parentsEl.firstElementChild;
const boxesConteiner = document.querySelector('#boxes');


function createBoxes(amout) {
  amout = inputEl.value;
   for(let i = 1; i <= inputEl.value; i += 1) {
    const addDivEl = document.createElement('div');
    addDivEl.style.background = getRandomHexColor();
    addDivEl.style.width = `${30 + i * 10}px`;
    addDivEl.style.height = `${30 + i * 10}px`;
    boxesConteiner.append(addDivEl);
  }
};

function destroyBoxes() {
  inputEl.value = '';
  const removeEl = boxesConteiner.children;
  
}


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click',destroyBoxes);


