// const categoriesListEl = document.querySelector("#categories");

// console.log(`Number of categories: ${categoriesListEl.children.length}`);

const categoriesItemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}
  Elements: ${item.querySelector("ul").children.length}`);
});
