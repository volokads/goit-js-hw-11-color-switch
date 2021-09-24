import refs from './refs.js'
const { startButton, closeButton} = refs

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

startButton.addEventListener('click', colorSwitcherStart)
closeButton.addEventListener('click', colorSwitherStop)

let colorInterval = null

function colorSwitcherStart() {
  colorInterval = setInterval(colorSwitch, 1000)
  startButton.setAttribute('disabled', 'true')
}

function colorSwitherStop() {
  clearInterval(colorInterval)
  refs.startButton.removeAttribute('disabled')
}

function colorSwitch  ()  {
  const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
  const index = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.background = colors[index]
}

