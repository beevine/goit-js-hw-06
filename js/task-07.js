// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const textSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = textSize.value + "px";

textSize.addEventListener("input", function () {
    text.style.fontSize = textSize.value + "px";
});
