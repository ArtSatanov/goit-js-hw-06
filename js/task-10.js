function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputeValue = document.querySelector('input');
const boxesPlace = document.querySelector('#boxes');

console.log(inputeValue.value);

btnCreate.addEventListener('click', createBoxes(10));

function createBoxes (qty) {
for (let i = 0; i < qty; i += 1) {
  const boxEl = document.createElement('div');
  boxEl.width = 30 + 10 * i; 
  boxEl.height = 30 + 10 * i;
  boxEl.backgroundColor = getRandomHexColor();
  boxesPlace.append(boxEl);
  return boxesPlace;
}

};



