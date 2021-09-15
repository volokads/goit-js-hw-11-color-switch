import refs from './refs.js'
const { startButton, closeButton, body} = refs

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// const promises = colors.map(colorSwitch)
// console.log(promises);
// body.style.backgroundColor = "#009688"

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsLengh = randomIntegerFromInterval(0, 5)

startButton.addEventListener('click', (colorSwitch) => {
  body.style.backgroundColor = "colorSwitch"
})


function colorSwitch  ()  {
    setInterval(() => {
      // console.log(color);
      const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
      const colorsLengh = randomIntegerFromInterval(0, 5)
      // console.log(colors[`${colorsLengh}`]); 
      
    }, 1000);
   }
colorSwitch()
// .then(x => console.log(x))
  // .catch(e => console.log(e))
console.log(colorSwitch);
console.log(body);


console.log(startButton);
closeButton.addEventListener('click', () => {
  body.style.backgroundColor = "#fff"
})


