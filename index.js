var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + "!" + " LET'S TEST YOUR BRAIN?");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Wah! Kya baat hai")
    score = score + 1

  } else {
    console.log("Are yaar!")
    score = score - 1
  }
  console.log("Aapka score hai = " + score)
  console.log("----------------------------------")
}

var question = [{
  question: "What are two things you can never eat for breakfast?",
  answer: "lunch and dinner"
}, {
  question: "What is always coming but never arrives?",
  answer: "tomorrow"
}, {
  question: "What goes up but never ever comes down?",
  answer: "age"
}, {
  question: "What has one eye but can't see anything?",
  answer: "needle"
}, {
  question: "I have one head, one foot, and four legs. What am I?",
  answer: "bed"
}, {
  question: "What has a neck but no head?",
  answer: "bottle"
}, {
  question: "What goes up as soon as rain comes down?",
  answer: "umbrella"
}]

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YOUR FINAL SCORE : " + score)