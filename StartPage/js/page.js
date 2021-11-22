
//get elements of webpage
const messages = ["The average surface area of a brick is 72 square centimeters.", "Download Random Access Memory off the internet, it totally works!", "Captain America has the ability to see faster."];


var onebutton = document.getElementById("1MinTimer");
var fivebutton = document.getElementById("5MinTimer");
var tenbutton = document.getElementById("10MinTimer");
var startScreen= document.getElementById("StartScreen");
var breakScreen= document.getElementById("BreakScreen");
var endScreen= document.getElementById("EndScreen");
var duration = 0;

breakScreen.style.display= "none";
endScreen.style.display= "none";



//startscreen transition
onebutton.addEventListener("click", function(){
  startScreen.style.display = "none";
  breakScreen.style.display = "block";
  duration = 60000;
  console.log("Push");
  //breathing(duration);
  //affirmations(5000);
  //animalPics(duration);
  setTimeout(function(){endScreenTransition();}, duration);
});

fivebutton.addEventListener("click", function(){
  startScreen.style.display = "none";
  breakScreen.style.display = "block";
  duration = 60000*5;
  console.log("Press");
  //(duration);
  //affirmations(duration);
  //animalPics(duration);
  setTimeout(function(){endScreenTransition();}, duration);
});

tenbutton.addEventListener("click", function(){
  startScreen.style.display = "none";
  breakScreen.style.display = "block";
  duration = 60000*10;
  console.log("Ping");
  //breathing(duration);
  //affirmations(duration);
  //animalPics(duration);
  setTimeout(function(){endScreenTransition();}, duration);
});

function endScreenTransition(){
  breakScreen.style.display = "none";
  endScreen.style.display = "block";
}

/*function breathing(x) {
  console.log("We doin some breathin right now.");
  //setInterval(play breathing gif, time);
}

function affirmations(x){
  //every X milliseconds, change affirmation
  var affirmation = document.getElementById("affirmations");
  for(var i= 0; i< x/5000; i++){
    affirmation.innerHTML = messages[i];
  }
}

/*function animalPics(x) {
$("#animalPic1").fadein(3000);
$("#animalpic1").fadeOut(3000);
}*/
restartButton= document.getElementById("Restart");
restartButton.addEventListener("click", function(){
  location.reload();
})
