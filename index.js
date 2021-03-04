var randomPath = [];
var userPath = [];
var colors = ["green", "red", "yellow", "blue"];
var levelNum = 0;
var status = "";

$(document).keypress(function(){

  if(status !== "started"){
    nextSequansy();
  }
  else{
    return;
  }
})

$(".btn").click(function(){

  if(status === "started"){

    userChosenColor = "";

    switch(this.id){

      case "green":
      userChosenColor = "green";
      break;

      case "red":
      userChosenColor = "red";
      break;

      case "yellow":
      userChosenColor = "yellow";
      break;

      case "blue":
      userChosenColor = "blue";
      break;

      default:
      return;
      break;
    }

    click_btn(userChosenColor);
    playSound(userChosenColor);

    userPath.push(this.id);
  }
  else{
    return;
  }

  checkAnswer(this.id);
})

function playSound(key){
  var audio = new Audio ("sounds/" + key + ".mp3");
  audio.play();
}

function click_btn(key){
  $("#" + key).addClass("pressed");
  setTimeout(function(){
    $("#" + key).removeClass("pressed");
  }, 100);
}

function nextSequansy(){

  levelNum = levelNum + 1;

  $("h1").text("Level " + levelNum);

  var randomNum = Math.floor(Math.random() * 4);

  randomPath.push(colors[randomNum]);

  playSound(randomPath[randomPath.length-1]);
  click_btn(randomPath[randomPath.length-1]);

  status = "started";
}

function checkAnswer(key){
  if(randomPath[userPath.length - 1] === userPath[userPath.length - 1]){

    if(userPath.length === randomPath.length){

      setTimeout(function(){
        nextSequansy();
        userPath = [];
      }, 1000);

    }

    else{
      return;
    }

  }
  else{
    gameOver();
  }
}

function gameOver(){

  $("body").addClass("gameOver");

  setTimeout(function(){
    $("body").removeClass("gameOver");
    var audio = new Audio ("sounds/wrong.mp3");
    audio.play();
  }, 200);

  $("h1").text("Game Over! Press A Key to Start!");



  levelNum = 0;
  randomPath = [];
  userPath = [];
  status = "";
}
