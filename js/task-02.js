const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector(`#ingredients`);
const arrItem = [];


const ingredientsAll = ingredients.map((item) => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = `${item}`;
  itemEl.classList.add(`item`);
  arrItem.push(itemEl);
});

listIngredients.append(...arrItem);