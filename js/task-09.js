function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColorChanger = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

buttonColorChanger.addEventListener('click', () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
});
