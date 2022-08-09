// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color
//  і виводить значення кольору в span.color.

const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(evt) {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    const span = document.querySelector(".color");
    span.textContent = color;
}
