// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsAddItem = ingredients.map((elem) => {
    const item = document.createElement("li");
    item.textContent = elem;
    item.classList.add("item");
    return item;
});

ingredientsList.append(...ingredientsAddItem);
console.log(ingredientsList);
