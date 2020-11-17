const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listIngredientsRef = document.querySelector('#ingredients');
const itemsArray = []

ingredients.map(ingredient => createListIngredients(ingredient));

function createListIngredients(ingredient) {
  const createLi = document.createElement('li');
  createLi.textContent = ingredient;
  itemsArray.push(createLi);
}

listIngredientsRef.append(...itemsArray)
