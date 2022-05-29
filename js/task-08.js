const formEl = document.querySelector(".login-form");

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  if (email === "" || password === "") {
    return alert(`Bсе поля должны быть заполнены.`);
  }
  const dataForm = {
    email,
    password,
  };

  console.log(dataForm);
  event.currentTarget.reset();

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => console.log(`${name}: ${value}`));
}

formEl.addEventListener("submit", onFormSubmit);
