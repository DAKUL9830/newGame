let score = 0;   //new score added
const scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName('hole'); //back elements for character

let proffess = ['prof','prof2', 'prof3', 'prof4', 'prof5', 'prof6', 'prof7', 'prof8', 'prof9'];
setInterval(function() {
 
  let choice = proffess[Math.floor(Math.random()*proffess.length)];//random appearance of the charaacters
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  
  holes[randomHoleIndex].classList.toggle(choice); //appearance of characters in random hole each second
}, 300);


const gameArea = document.getElementById('whack-a-prof');
gameArea.addEventListener('click', function(clickEvent) { //click function,if you click on character,it dissapears
  console.log(clickEvent.target.className);
    if(!timer) {      //timer involved
    timer = window.setInterval(function() { 
      myFunction();
    }, 1000); // every second
  }
 
  if (clickEvent.target.className.length>4) {
    remove(clickEvent.target.classList);
    score++;
    scoreDisplay.innerText = score;
  }
})


var seconds=60;
var timer;
function myFunction() {
  if(seconds < 60) { // I want it to say 1:00, not 60
    document.getElementById("timer").innerHTML = seconds;
  }
  if (seconds >0 ) { // so it doesn't go to -1
     seconds--;
  } else {
     clearInterval(timer);
     alert("your time is over");
  }
}


document.getElementById("timer").innerHTML="1:00"; 
//this is so we can remove professors that are added without retyping the remove function every time
//(the classname returned each time is different so i can't find a solution that will be less than O(N),
//ideally it should just remove the one prof and be O(1))

function remove(event) {
  for(let i=0;i<proffess.length;i++){
    if(i==0)
      event.remove('prof');
    else
      event.remove('prof' +(i+1));
  }
}




//music
var mySong = document.getElementById("music");

//automatically plays the music on website load
//also sets volume automatically
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});

//Play and pause buttons
function plays(){
  if(mySong.paused){
    mySong.play();
    document.getElementById("button").innerHTML = "Pause Music";
  }
  else{
    mySong.pause();
    document.getElementById("button").innerHTML = "Play Music";
  }
}