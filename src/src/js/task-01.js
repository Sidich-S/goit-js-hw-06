// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
//     (тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).


const categoryRef = document.querySelectorAll(`ul#categories`);

const ulRef = document.querySelectorAll(`li.item`);
console.log(`Number of categories:`, ulRef.length);


const nameCategRef = document.querySelectorAll(`.item`);

nameCategRef.forEach( element => {
    const categName = element.firstElementChild;
    const elemNumber = element.querySelectorAll("li");
    console.log(`Category: ${categName.textContent}`);
    console.log(`Elements: ${elemNumber.length}`)
});
