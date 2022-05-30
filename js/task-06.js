const inputEl = document.querySelector("#validation-input");

function changeInputClass(add, rem) {
  inputEl.classList.add(add);
  inputEl.classList.remove(rem);
}

function inputValidation() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    changeInputClass("valid", "invalid");
  } else {
    changeInputClass("invalid", "valid");
  }
}

inputEl.addEventListener("blur", inputValidation);
