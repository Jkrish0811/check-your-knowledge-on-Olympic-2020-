var readlineSync = require("readline-sync");

var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  //var userAns2 = readlineSync.question(question);


  if (userAns === answer) {
    console.log("you are right");
    score = score + 1;
    console.log("score= " + score);
  } else {
    console.log("you are wrong");
  }
  console.log("------------------------------------");
}

play("Q1.where is olympic 2020 organised ? ", "tokyo");
play("Q2.Who won gold for India? ", "neeraj chopra");
play("Q3.How many medal won by India? ", "7");
play("Q4.Who won bronze for India in badminton? ", "sindhu");
play("Q5.Who won silver for India in weightlifting ? ", "mirabai chanu");
play("Q6.Who won silver for India in wrestling? ", "kumar ravi");
play("Q7.Who is goal-keeper of indian hokey team ? ", "sreejesh");
console.log("great! your score is = " + score);