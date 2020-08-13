const buttonColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let gamePattern = [];

//detect button click

$(".btn").click(function() {
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  console.log(userChosenColor);
});

//generate random color/letter sequence

function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
};

nextSequence();

console.log(gamePattern);
console.log(userClickedPattern);

//make sound which corresponds to button click

function playSound(name) {
  $('.btn').click(function() {
    let audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
  });
};
