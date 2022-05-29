const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const createBtnEl = controlsEl.querySelector("[data-create]");
const destroyBtnEl = controlsEl.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getValue() {
  const value = Number(inputEl.value);
  if (!value) return;
  createBoxes(value);
}

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * [i]}px`;
    box.style.height = `${30 + 10 * [i]}px`;
    boxesArr.push(box);
  }

  boxesEl.append(...boxesArr);
}

function destroyBoxes() {
  boxesEl.textContent = "";
  inputEl.value = "";
}

createBtnEl.addEventListener("click", getValue);
destroyBtnEl.addEventListener("click", destroyBoxes);
