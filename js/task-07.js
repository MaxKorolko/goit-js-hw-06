const inputEl = document.querySelector("#font-size-control");
const changeableTextEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  changeableTextEl.style.fontSize = `${event.currentTarget.value}px`;
});

// console.log(inputEl.value);
