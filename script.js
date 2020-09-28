// //Events
// 1. User clicks on "start quiz"
// 5. User clicks on an answer
// 9. Timer reaches 0
// 13. User enters in initials
// 17. highscore html page loads(16a)
// 21. user clicks on return to quiz(16c)
// 25. user clicks on "view highscores"
// 28. user clicks on "try again"(16b)
// 31. user clicks on "settings"
// 35. user clicks save on modal
// 39. user clicks reset scores
// //Handlers
// 2. handles user click on start quiz
// 6. handles user click on answer
// 10.handles timer reaching 0
// 14.handles user input of initials
// 18.handles highscore html page load(16a) 
// 22/29.handles user click to return to quiz html(16c)(16b)
// 26.handles user click on view highscores
// 32. handles user click on "settings"
// 36. handles user click on save
// 40. handles user click on reset scores
// //States
// 3. timer begins counting down
// 7. user score is increased, or time is deducted based on selection, 
// 11.timer stops counting down.
// 15. user initials and score are stored in local storage 
// 19. local storage contains info to populate table(16a)
// 23/30. quiz settings reset, timer resets, score resets.(16c)(16b)
// 27. html page is changed to highscore html
// 33. a modal appears to collect user prefrences for quiz
// 37. settings are saved to local storage
// 41. local storage deletes user data from local storage
// //UI
// 4. The DOM is populated with a question and answers
// 8. The DOM is populated with a new questions and answers (repeats untill timer < 0)
//     a green correct or red incorrect shows on the screen
//     a correct chime or incorrect chime plays on the screen
// 12. The DOM is populated with a game over screen, 
//     the timer shows 0 and shows an option to enter in initials.
// 16/27. The DOM changes HTML to Highscore page and presents user with a
//     a. highscore table that shows initials and scores of different users.
//     b. button to try again,
//     c. link to return to the quiz,
//     d. settings button.
//     e. Reset highscores button.
// 20. High score populates with local storage data(16a)
// 24. The DOM is populated with a link to highscore, 
//     timer that shows how many seconds are left,
//     Coding quiz title and instructions,
//     and a button that starts quiz
// 34.THe Modal appear and gives quiz settings and option to save
// 38.The modal disapears and options will be applied on the next quiz start press
// 42.The DOM refreshes highscores table with nothing due to nothing stored in local storage.



const timer = document.querySelector('h1');
var startButton = document.getElementById("#startbutton");
var maincontainer = document.getElementById("#maincontainer");

// var button = document.getElementById("#button");
// button.addEventListener("click", function(setInterval){
// });


let timeSecond = 60;




// Timer
function startTimer() {
var countDown = setInterval(function() {
  timeSecond--;
  timer.textContent = "00:" + timeSecond
  if (timeSecond <= 0) {
    clearInterval(countDown)
    alert("Game over!")
  }

}, 1000);
}

// hide timer on click
function hide() {
  var welcome = document.querySelector("#welcome");
  welcome.setAttribute("style","visibility:hidden");
}

document.getElementById("startbutton").addEventListener("click", startTimer);
document.getElementById("startbutton").addEventListener("click", hide);
// document.getElementById("startbutton").addEventListener("click, ____")

// Adding elements to the DOM
// const firstHeading = document.createElement('h2');
// firstHeading.textContent = "Test your Coding Knowledge!";
// firstHeading.style.textAlign = "Center";
// document.getElementById('wantToplay').appendChild(firstHeading);

// const startQuizp = document.createElement('p');
// startQuizp.textContent = "Incorrect answers will be penalized by 10 seconds. Don't forget to record your high score!";
// startQuizp.style.textAlign = "Center";
// document.getElementById('wantToplay').appendChild(startQuizp);

// const btn = document.createElement("button");
// btn.textContent = "Start Quiz Now"
// btn.style.textAlign = "center";
// document.querySelector('wantToplay').appendChild(btn);









// document.getElementById("#startbutton").addEventListener('click', setInterval);



// QUESTIONS

var quizArr = [
  {"questionTitle": "Question 1?",
"multipleChoice": ["A", "B", "C", "D"],
 "answer": "B",

},

{"questionTitle": "Question 2?",
"multipleChoice": ["A", "B", "C", "D"],
 "answer": "D",

},

{"questionTitle": "Question 3?",
"multipleChoice": ["A", "B", "C", "D"],
 "answer": "A",

},
{"questionTitle": "Question 4?",
"multipleChoice": ["A", "B", "C", "D"],
 "answer": "B",

},
];
console.log(quizArr)
// function displayQuiz () {
//   console.log(quizArr[0]);
//   console.log(quizArr[0].questionTitle);
// }


