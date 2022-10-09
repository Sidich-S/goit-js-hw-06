// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
//     (тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).


const categoresLi = document.querySelectorAll("li.item")

console.log(`Number of categories: ${categoresLi.length}`);
categoresLi.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements:: ${item.lastElementChild.children.length}`)
});

