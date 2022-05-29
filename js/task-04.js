const counterEl = document.querySelector("#counter");
const decrementBtnEl = counterEl.querySelector('[data-action="decrement"]');
const incrementBtnEl = counterEl.querySelector('[data-action="increment"]');
const valueEl = counterEl.querySelector("#value");

let counterValue = 0;

function increment() {
  counterValue += 1;
  changeCounterValue();
}

function decrement() {
  counterValue -= 1;
  changeCounterValue();
}

function changeCounterValue() {
  valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);
