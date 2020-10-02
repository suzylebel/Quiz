
window.addEventListener("onload", hide("#questionContainer"));


var currentQuestion = 0;
const timer = document.querySelector('h1');
var startButton = document.getElementById("startbutton");
var maincontainer = document.getElementById("maincontainer");
const questionsEl = document.getElementById("questions");
const answerEl = document.getElementById("answers");
const questionContainerEl = document.getElementById("questionContainer");
// var button = document.getElementById("#button");
// button.addEventListener("click", function(setInterval){
// });

let timeSecond = 60;


// Timer
function startTimer() {
  var countDown = setInterval(function () {
    timeSecond--;
    timer.textContent = "00:" + timeSecond
    if (timeSecond <= 0) {
      clearInterval(countDown)
      alert("Game over!")
    }

  }, 1000);
}

// hide timer on click
function hide(elementHide) {
  var welcome = document.querySelector(elementHide);
  welcome.setAttribute("style", "display:none");
}

function show(showElements) {
  var showbox = document.querySelector(showElements);
  showbox.setAttribute("style", "display:block");
}


// QUESTION ARRAY

var quizArr = [
  {
    "questionTitle": "Which of these is not a JavaScript data type?",
    "multipleChoice": ["Number", "Element", "Object", "Boolean"],
    "answer": 1,

  },

  {
    "questionTitle": "The Dom is an application programming interface valid for ?",
    "multipleChoice": ["Visual Studio Code", "Goggle Chrome", "CSS", "HTML"],
    "answer": 4,

  },

  {
    "questionTitle": "Question 3?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": 0,

  },
  {
    "questionTitle": "Question 4?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": 3,

  },
];


function displayQuestion(qstion, choice) {
  console.log("questions display here");
  questionsEl.textContent = "";
  var questionTitle = document.createElement("p");
  var node = document.createTextNode(qstion);
  questionTitle.appendChild(node);
  questionsEl.appendChild(questionTitle);


  var choiceA = document.getElementById("btn1");
  var choiceB = document.getElementById("btn2");
  var choiceC = document.getElementById("btn3");
  var choiceD = document.getElementById("btn4");
  var questiontitlebox = document.createElement("ol");



  var nodeA = document.createTextNode(choice[0]);
  choiceA.appendChild(nodeA);

  // document.getElementById("btn1").removeChild(document.getElementById("btn1").firstChild);
  var nodeB = document.createTextNode(choice[1]);
  choiceB.appendChild(nodeB);

  // document.getElementById("btn2").removeChild(document.getElementById("btn2").firstChild);
  var nodeC = document.createTextNode(choice[2]);
  choiceC.appendChild(nodeC);
  // document.getElementById("btn3").removeChild(document.getElementById("btn3").firstChild);
  var nodeD = document.createTextNode(choice[3]);
  choiceD.appendChild(nodeD);
  // document.getElementById("btn4").removeChild(document.getElementById("btn4").firstChild);


  // choiceA.removeChild(choiceA.firstChild);
  // choiceA.createTextNode(choice[0]);


  // choiceB.innerHTML(choice[1]);
  // choiceC.innerHTML(choice[2]);
  // choiceD.innerHTML(choice[3]);


  questionContainerEl.appendChild(questiontitlebox);
  questiontitlebox.appendChild(choiceA);
  questiontitlebox.appendChild(choiceB);
  questiontitlebox.appendChild(choiceC);
  questiontitlebox.appendChild(choiceD);
  console.log("show" + qstion);

};

// questionsEl.onclick =  function (event) {
//   let li = event.target.closest("li");
//   if (!li) return;
//   if (!questionsEl.contains(li)) return;
//   if (li.textContent === quizArr[currentQuestion].answer) {
//     currentQuestion++;
//     playQuiz();
//   // } else {
//   //   alert("game over")
//   }
// }

function playQuiz() {
  hide("#welcome");
  if (currentQuestion < quizArr.length) {
    displayQuestion(
      quizArr[currentQuestion].questionTitle,
      quizArr[currentQuestion].multipleChoice)
    startTimer();
    show("#questionContainer");
    // game mechanics (while loop) 


  } else {
    alert("Game over")
  }
}


// conditional statements
// separate if statement for if answer correct
function selectAnswer(answer) {
  if (answer !== quizArr[currentQuestion].answer) {
    timeSecond -= 10
  }
  currentQuestion++
  playQuiz();
  hide();
  // show ();

}


// Event Listeners
// document.getElementById("startbutton").addEventListener("click", startTimer);
// document.getElementById("startbutton").addEventListener("click", hide);
document.getElementById("startbutton").addEventListener("click", playQuiz);
// document.getElementById("startbutton").addEventListener("click, ____")



// function questionBox () {
//   questionsEl.innerHTML = "";
//   var questionTitle = document.createElement("p");
//   var node = document.createTextNode(question);
//   questionTitle.appendChild(node);
//   questionsEl.appendChild(questionTitle);

//   var choiceA = document.createElement("li");
//   var choiceB = document.createElement("li");
//   var choiceC = document.createElement("li");
//   var choiceD = document.createElement("li");

//   var nodeA = document.createTextNode(choice[0]);
//   choiceA.appendChild(nodeA);
//   var nodeB = document.createTextNode(choice[1]);
//   choiceB.appendChild(nodeB);
//   var nodeC = document.createTextNode(choice[2]);
//   choiceC.appendChild(nodeC);
//   var nodeD  = document.createTextNode(choice[3]);
//   choiceD.appendChild(nodeD);
//   console.log("display" + qtn);
// }
console.log(quizArr)
// function displayQuiz () {
//   console.log(quizArr[0]);
//   console.log(quizArr[0].questionTitle);
// }


