let score = 0;
const scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName('hole');

let proffess = ['prof','prof2', 'prof3'];
setInterval(function() {
 
  let choice = proffess[Math.floor(Math.random()*proffess.length)];//proffess[Math.floor(Math.random()*proffess.length)];
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  
  holes[randomHoleIndex].classList.toggle(choice);
}, 1000);


const gameArea = document.getElementById('whack-a-prof');
gameArea.addEventListener('click', function(clickEvent) {
  console.log(clickEvent.target.className);
    if(!timer) {
    timer = window.setInterval(function() { 
      myFunction();
    }, 1000); // every second
  }
 
  if (clickEvent.target.className) {
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
