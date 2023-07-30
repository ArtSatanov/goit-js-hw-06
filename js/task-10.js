function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  inputeValue: document.querySelector('input'),
  boxesPlace: document.querySelector('#boxes'),
};


refs.btnCreate.addEventListener('click', () => {
  if( Number(refs.inputeValue.value.trim()) > Number(refs.inputeValue.max) ||
  Number(refs.inputeValue.value.trim()) < Number(refs.inputeValue.min)
) {
  alert('Please enter number from 1 to 100');
} else {
    createBoxes(Number(refs.inputeValue.value.trim()));
}
});

refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.inputeValue.value = '';
  refs.boxesPlace.innerHTML = '';
}

function createBoxes(amount) {
  const boxes = [];
for (let i = 0; i < amount; i += 1) {
  const boxEl = document.createElement('div');
  boxEl.style.width = 30 + 10 * i + "px"; 
  boxEl.style.height = 30 + 10 * i + "px";
  boxEl.style.backgroundColor = getRandomHexColor();
  boxEl.style.marginBottom = "2px";
  boxes.push(boxEl);
}
  console.log(boxes);
  refs.boxesPlace.append(...boxes);
};



