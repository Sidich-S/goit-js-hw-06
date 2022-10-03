// 1. // Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.

// 2.// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.

// 3. // Обновляй интерфейс новым значением переменной counterValue.


const btnDecrementRef = document.querySelectorAll(`button`)[0];
const btnIncrementRef = document.querySelectorAll(`button`)[1];

let counterValue = 0;

btnDecrementRef.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});

btnIncrementRef.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueRef = document.querySelector(`span`);
    valueRef.textContent = counterValue;
});



