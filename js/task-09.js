const textColorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = () => {
  textColorSpan.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
};
changeColorBtn.addEventListener("click", changeColor);
