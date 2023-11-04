const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
