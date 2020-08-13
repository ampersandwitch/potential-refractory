const buttonColors = ["red", "blue", "green", "yellow"];

let userClickedPattern = [];

let gamePattern = [];


function nextSequence() {

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

  $(".btn").click(function() {

    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
  });


};

  console.log(gamePattern);

nextSequence();

console.log(userClickedPattern);
