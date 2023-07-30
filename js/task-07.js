const fontSizeInput = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
fontSizeInput.addEventListener('input', () => {
  textEl.style.fontSize = `${fontSizeInput.value}px`;
});
