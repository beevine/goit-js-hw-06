// Напиши скрипт, який під час набору тексту в інпуті input#name - input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

let input = document.querySelector("#name-input");
let span = document.querySelector("#name-output");

input.addEventListener("input", () => {
    if (input.value === "") {
        return (span.textContent = "Anonymous");
    }
    return (span.textContent = input.value);
});
