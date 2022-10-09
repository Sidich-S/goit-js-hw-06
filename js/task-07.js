// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const simplyBtn = document.querySelector("#font-size-control");
const wordRef = document.querySelector('#text');

simplyBtn.addEventListener('input', onTextChangeFont)


function onTextChangeFont() {
    wordRef.style.fontSize = `${simplyBtn.value}px`
    }