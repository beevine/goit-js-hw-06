// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const createButton = document.querySelector("[data-create]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const destroyButton = document.querySelector("[data-destroy]");

let boxSize = 30;

createButton.addEventListener("click", onCreate);
destroyButton.addEventListener("click", onDestroy);

function onCreate(evt) {
    createBoxes(input.value);
}

function createBoxes(count) {
    for (let i = 0; i < count; i += 1) {
        const div = document.createElement("div");
        div.style.height = boxSize + "px";
        div.style.width = boxSize + "px";
        div.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(div);
        boxSize = boxSize + 10;
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes(evt) {
    boxes.innerHTML = "";
}
