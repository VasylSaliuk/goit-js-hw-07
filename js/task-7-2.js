const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listIngredients = document.querySelector('#ingredients');

  const createListIngredients = (ingredient) => {
      const createLi = document.createElement('li');
      createLi.textContent = ingredient;
      listIngredients.appendChild(createLi);
      return createLi;
  }

ingredients.map(ingredient => createListIngredients(ingredient));

console.log(listIngredients);