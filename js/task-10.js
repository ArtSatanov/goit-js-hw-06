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


console.log(refs.boxesPlace);

refs.btnCreate.addEventListener('click', createBoxes(10));

function createBoxes(qty) {
  const boxes = [];
for (let i = 0; i < qty; i += 1) {
  const boxEl = document.createElement('div');
  boxEl.style.width = 30 + 10 * i + "px"; 
  boxEl.style.height = 30 + 10 * i + "px";
  boxEl.style.backgroundColor = getRandomHexColor();
  boxes.push(boxEl);
}
  console.log(boxes);
  refs.boxesPlace.append(...boxes)
};



