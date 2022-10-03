// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientsRef = document.querySelector(`ul`);

// function makeIngredients(ingredients) {
//   return ingredients.map((text) => {
//     const liRef = document.createElement(`li`);
//     liRef.textContent = text;
//     liRef.classList.add(`item`);
//     console.log(liRef);
//     return liRef
//   });
// };

// const elemLi = makeIngredients(ingredients);
// ingredientsRef.append(...elemLi);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.