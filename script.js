

var currentQuestion = 0;
const timer = document.querySelector('h1');
var startButton = document.getElementById("#startbutton");
var maincontainer = document.getElementById("#maincontainer");
const questionsEl = document.getElementById("#questions");
const answerEl = document.getElementById("#answers");
const questionContainerEl = document.getElementById("#questionContainer");
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
function hide() {
  var welcome = document.querySelector("#welcome");
  welcome.setAttribute("style", "visibility:hidden");
}


// QUESTION ARRAY

var quizArr = [
  {
    "questionTitle": "Question 1?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": "B",

  },

  {
    "questionTitle": "Question 2?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": "D",

  },

  {
    "questionTitle": "Question 3?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": "A",

  },
  {
    "questionTitle": "Question 4?",
    "multipleChoice": ["A", "B", "C", "D"],
    "answer": "B",

  },
];


function displayQuestion(qstion, choice) {
  console.log("questions display here");
  // questionsEl.innerHTML = "";
  var questionTitle = document.createElement("p");
  var node = document.createTextNode(qstion);
  questionTitle.appendChild(node);
  // questionsEl.appendChild(questionTitle);

  var choiceA = document.createElement("li");
  var choiceB = document.createElement("li");
  var choiceC = document.createElement("li");
  var choiceD = document.createElement("li");
  var questiontitlebox = document.createElement("ol");

  var nodeA = document.createTextNode(choice[0]);
  choiceA.appendChild(nodeA);
  var nodeB = document.createTextNode(choice[1]);
  choiceB.appendChild(nodeB);
  var nodeC = document.createTextNode(choice[2]);
  choiceC.appendChild(nodeC);
  var nodeD = document.createTextNode(choice[3]);
  choiceD.appendChild(nodeD);

  questionsEl.appendChild(questiontitlebox);
  questiontitlebox.appendChild(choiceA);
  questiontitlebox.appendChild(choiceB);
  questiontitlebox.appendChild(choiceC);
  questiontitlebox.appendChild(choiceD);
  console.log("show" + qstion);

};


function runQuiz() {
  if (startingquestion < quizArr.length) {
    displayQuestion(
      quizArr[startingquestion].questionTitle,
      quizArr[startingquestion].multipleChoice
    );
  } else {
    alert("Game over")
  }
}

function selectAnswer() {

}


// Event Listeners
document.getElementById("startbutton").addEventListener("click", startTimer);
document.getElementById("startbutton").addEventListener("click", hide);
document.getElementById("startbutton").addEventListener("click", displayQuestion);
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


