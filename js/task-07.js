const inputRangeSize = document.querySelector("#font-size-control");
const inputTextSize = document.querySelector("#text");

const handleInput = () => {
  inputTextSize.style.fontSize = `${inputRangeSize.value}px`;
};
inputRangeSize.addEventListener("input", handleInput);
