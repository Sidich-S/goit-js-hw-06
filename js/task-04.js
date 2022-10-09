// 1. // Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.

// 2.// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.

// 3. // Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0

const btnIncrementEl = document.querySelector(`[data-action="increment"]`)
const numberValueEl = document.querySelector(`#value`)
const btnDecrementEl = document.querySelector(`[data-action="decrement"]`)

btnIncrementEl.addEventListener('click', () => {
    numberValueEl.textContent = counterValue += 1
})

btnDecrementEl.addEventListener(`click`, () => {
    numberValueEl.textContent = counterValue -= 1
})





