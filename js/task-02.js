const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector(`#ingredients`);

ingredients.forEach((item) => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = `${item}`;
  itemEl.classList.add(`item`);
  console.log(itemEl);
  listIngredients.appendChild(itemEl);
});

