var buttonColours = ["red", "blue", "green" , "yellow"];
var gamePattern = [];
var clickedPattern = [];


var started = false;
  var level = 0;
  
  $(document).keydown(function (event) {
    if(!started) {
    $("#level-title").text("Level " + level);
   nextSequence();
   started = true;
    };
});


// function Clicked() {

  document.querySelectorAll(".btn").forEach(function (button) {
    const color = button.id;
    button.addEventListener("click", function () {
      playSound(color);
      animatePressed(color);
      clickedPattern.push(color);
      checkAns(clickedPattern.length - 1);
    });
  });
// for (var i = 0; i<document.querySelectorAll(".btn").length; i++) {
  
//   const color = document.querySelectorAll(".btn")[i].id;
  
//   clickedPattern.push(color);
//   // playSound(color);
//  document.querySelectorAll(".btn")[i].addEventListener("click" , function() {
//    playSound(color);
//   animatePressed(color);  
//   });
//       }

//       // document.querySelectorAll(".btn")[i].addEventListener("click" , function() {
//        checkAns(clickedPattern.length-1);
//       // });

// }

function nextSequence() {
  clickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
     $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        // Clicked();
       animatePressed(randomChosenColour);
    }

    // playSound(randomChosenColour);

    // .style.animation = 'fading 2s infinite';
    //.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // document.querySelectorAll(".btn")
 

function playSound (name) {
    var audio = new Audio(`sounds/${name}.mp3`);
     audio.muted = false;
  audio.play();
}


function animatePressed(currentcolor) {
  $("." + currentcolor).addClass("pressed");
  setTimeout(function() {
    $("." + currentcolor).removeClass("pressed");
}, 100);

}

function checkAns(currentlevel) {

 if (gamePattern[currentlevel] === clickedPattern[currentlevel] ) {
   console.log("success");

   if (gamePattern.length  === clickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
   }
 } else {
   gameover();
   startover();
 }
}


function gameover() {
//  var audio = new Audio("wrong.mp3");
//  audio.play();
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
}, 200);
$("#level-title").text( "Game Over, Press Any Key to Restart");
}

function startover() {
  level = 0;
  gamePattern = [];
  started = false;
  // nextSequence();

}