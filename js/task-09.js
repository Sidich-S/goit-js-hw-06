// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nextColorRef = document.querySelector(`.change-color`);
const colorRef = document.querySelector(`.color`);
const body = document.querySelector(`body`);

nextColorRef.addEventListener(`click`, (event) => {
  const randomColorRef = getRandomHexColor();
  body.style.backgroundColor = randomColorRef;
  colorRef.textContent = randomColorRef;
});
