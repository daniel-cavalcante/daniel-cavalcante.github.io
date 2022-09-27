const body = document.body;
const myButton = document.querySelector('#myButton');
myButton.addEventListener('change', () => {
  const para = document.createElement('p');
  para.textContent = myButton.value;
  body.appendChild(para);
});

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
  const light = random(100);
  const rndCol = `hsl(${random(360)}, ${random(100)}%, ${light}%)`;
  if (light <= 50) {
    document.body.style.color = 'hsl(0,0%,100%)';
  } else {
    document.body.style.color = 'hsl(0,0%,0%)';
  }
  document.body.style.backgroundColor = rndCol;
});