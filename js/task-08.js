const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  if (email === "" || password === "") {
    alert("всі поля повинні бути заповнені");
    return;
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);

  registerForm.reset();
}
