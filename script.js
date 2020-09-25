var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;

document.getElementById("myBtn").addEventListener("click", setTime);

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent =  "Time left:" + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      alert("Time is up!");
    }

  }, 1000);
}

setTime();

