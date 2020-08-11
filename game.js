
const buttonColors = ["red", "blue", "green", "yellow"];


let gamePattern = [];


function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
  gamePattern.push(randomNumber + " " + randomChosenColor);
};

console.log(nextSequence());
