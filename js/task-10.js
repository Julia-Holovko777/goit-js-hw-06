const controlCase = document.querySelector("#controls");
const boxesCase = document.querySelector("#boxes");
const input = document.querySelector('input[type="number"]');
const createbtn = document.querySelector("[data-create]");
const destroybtn = document.querySelector("[data-destroy]");

createbtn.addEventListener("click", () => createBoxes(input.value));
destroybtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  let size = 20;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = `<div class="container" style="
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: ${getRandomHexColor()};
    width: ${size}px;
    height: ${size}px;"></div>`;

    boxesArr.push(div);
  }
  boxesCase.insertAdjacentHTML("beforeend", boxesArr.join(""));
}

function destroyBoxes() {
  boxesCase.innerHTML = "";
}
