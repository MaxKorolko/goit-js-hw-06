const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsItemEl = ingredients.map((unit) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = `${unit}`;
  ingredientsItemEl.classList.add("item");
  return ingredientsItemEl;
});

ingredientsListEl.append(...makeIngredientsItemEl);
