const outputBackgroundColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  outputBackgroundColorEl.textContent = getRandomHexColor();
}

changeColorBtnEl.addEventListener("click", changeBackgroundColor);
