// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

let input = document.querySelector("#validation-input");
// let quantity = input.getAttribute("data-length");

input.addEventListener("blur", () => {
    if (input.value.length !== Number(input.getAttribute("data-length"))) {
        input.className = "invalid";
    } else {
        input.className = "valid";
    }
    console.log(input.getAttribute("data-length"));
    console.log(input.value.length);
    console.log(input.classList);
});
