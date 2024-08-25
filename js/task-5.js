const changeBg = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeBg.addEventListener("click", () => {
    const randomNewColor = getRandomHexColor();
    body.style.backgroundColor = randomNewColor;
    color.textContent= randomNewColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  






