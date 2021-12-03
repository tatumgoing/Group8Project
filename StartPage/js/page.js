
//get elements of webpage
const messages = ["I am worthy of what I desire.", "I will not compare myself to strangers on the internet.", "I am always headed in the right direction.", "I have all the strength and confidence within me that I need to succeed.", "I am doing my best, and that is enough.", "I love myself for who I am.", "I am in charge of my own happiness.", "I release negative feelings and thoughts about myself.", "I am ever growing and developing; I am better than I was yesterday.", "I accept myself unconditionally", "I am free of worry and am at peace with who I am", "My strength is greater than any struggle.", "No one can make me feel inferior.", "I am capable of doing anything I put my mind to.", "My feelings deserve to be expressed; I allow them to flow.", "I nourish my body, mind, and soul.", "I am worthy. I am loved. I am enough."];


var onebutton = document.getElementById("1MinTimer");
var fivebutton = document.getElementById("5MinTimer");
var tenbutton = document.getElementById("10MinTimer");
var affirms= document.getElementById("affirmations");
var breath= document.getElementById("breathing");
var picture= document.getElementById("pictures");
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
  breathing(duration/3);
  affirmations(duration/3);
  animalPics(duration/3);
  setTimeout(function(){endScreenTransition();}, duration);
});

fivebutton.addEventListener("click", function(){
  startScreen.style.display = "none";
  breakScreen.style.display = "block";
  duration = 60000*5;
  console.log("Press");
  breathing(duration/3);
  setTimeout(function(){
    affirmations(10000);
    animalPics(10000);}, duration/3-10000);
  setTimeout(function(){endScreenTransition();}, duration);
});

tenbutton.addEventListener("click", function(){
  startScreen.style.display = "none";
  breakScreen.style.display = "block";
  duration = 60000*10;
  console.log("Ping");
  breathing(duration/3);
  setTimeout(function(){
    affirmations(10000);
    animalPics(10000);}, duration/3-10000);
  setTimeout(function(){endScreenTransition();}, duration);
});

function endScreenTransition(){
  breakScreen.style.display = "none";
  endScreen.style.display = "block";
}

function breathing(time) {
  //Repeats breathing gif until the time declared in the call is reached. Gif obtained from https://tenor.com/view/inhale-exhale-depression-anxiety-stress-gif-5026109
  console.log("We doin some breathin right now.", time);
  var firstBreathGif = $("#breathing").html('<img src = img/inhale-exhale.gif>');
  setTimeout(() => {$("#breathing").html('')}, time);
}

function affirmations(x){
  console.log("affirmation in progress");
  //every X milliseconds, change affirmation
  var affirmationsLength = messages.length;
  var index = 0;
  var maxIters = x/5000;
  var iters = 0;
  var cycle = setInterval(function(){
    affirms.innerHTML = messages[index];
    index = (index +1) % affirmationsLength;
    iters++;
    if(iters == maxIters){
      clearInterval(cycle);
    }
  },x)
}

function animalPics(x) {
  console.log("animals in progress");
  var myUrl = "https://cataas.com/cat?json=true";

setInterval(function(){callAjax()}, x);

function callAjax() {
  console.log("click");
  // Using the core $.ajax() method
  $.ajax({
      // API endpoint
      url: myUrl,
      // Any data to send
      // data: { id: 123},
      // POST or GET request
      type: "GET",
      // data type we expect back
      dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      var imgUrl = "https://cataas.com" + data.url;
      var imgTag = "<img src=" + imgUrl + ">";
      $("#pictures").html(imgTag);
  })
  .fail(function(request,error) {
      console.log(request, error);

	})

}


}

restartButton= document.getElementById("Restart");
restartButton.addEventListener("click", function(){
  location.reload();
})
