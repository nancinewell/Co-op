"use strict";

var score = 0;
var setB;
var startTime;
var endTime;
var totalTime;
var startLength;

function start() {
  //hide endgame, show game, hide start, reset feedback
  document.getElementById("endgame").className = "hidden";
  document.getElementById("game").className = "";
  document.getElementById("start").className = "hidden";
  document.getElementById("feedback").innerHTML = ""; //reset score to 0;

  document.getElementById("score").innerHTML = "0"; //reset setB

  setB = [[3, 9], [4, 4], [8, 10], [4, 5], [3, 7], [5, 9], [4, 2], [7, 3], [5, 8], [9, 4], [7, 4], [5, 4], [8, 5], [7, 8], [4, 9], [9, 5], [4, 7], [8, 7], [5, 1], [9, 3], [7, 4], [3, 7], [5, 8], [7, 8], [9, 5], [4, 9], [8, 5], [8, 0]]; // setB = [[1,3],[10,8]];

  startLength = setB.length; //set the problem, set the date

  setProblem();
  var date = new Date();
  startTime = date.getTime();
}

function checkAnswer() {
  //gather info from HTML
  var inAnswer = document.getElementById("inAnswer").value;
  var num1 = document.getElementById("num1").innerHTML;
  var num2 = document.getElementById("num2").innerHTML; //parse info to integers

  var parsedNum1 = parseInt(num1);
  var parsedNum2 = parseInt(num2);
  var parsedAnswer = parseInt(inAnswer); //get answer to multiplication problem

  var answer = parsedNum1 * parsedNum2; //Act based on answer

  if (parsedAnswer == answer) {
    //if correct, say so and up the score.
    document.getElementById("feedback").innerHTML = "Correct";
    score++;
    document.getElementById("score").innerHTML = score;
  } else {
    //if incorrect, say so.
    document.getElementById("feedback").innerHTML = "Incorrect. <br>" + num1 + " x " + num2 + " = " + answer;
  }

  setProblem();
}

function setProblem() {
  var setBlength = setB.length;

  if (setBlength == 0) {
    //game over
    var date = new Date();
    endTime = date.getTime();
    totalTime = Math.trunc((endTime - startTime) / 1000);
    var scorePercent = score / startLength * 100; //hide game

    document.getElementById("game").className = "hidden"; //show endgame

    document.getElementById("endgame").className = ""; //display time and score

    document.getElementById("endscore").innerHTML = scorePercent;
    document.getElementById("endtime").innerHTML = totalTime;
  } else {
    //get random index and set it to variables, then remove that index
    var randomNum = Math.floor(Math.random() * (setBlength - 1));
    var num1 = setB[randomNum][0];
    var num2 = setB[randomNum][1];
    setB.splice(randomNum, 1); //set the numbers to the problem.

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("inAnswer").value = "";
  }
}