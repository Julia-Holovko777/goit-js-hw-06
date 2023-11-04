const counterValue = document.getElementById("value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

decrementButton.addEventListener("click", function () {
  counterValue.innerText = parseInt(counterValue.innerText) - 1;
});

incrementButton.addEventListener("click", function () {
  counterValue.innerText = parseInt(counterValue.innerText) + 1;
});
