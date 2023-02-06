function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');

changeColorEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = getRandomHexColor();
})