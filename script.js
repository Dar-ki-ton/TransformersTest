var checkQ1 = document.getElementById("check1");
var checkQ2 = document.getElementById("check2");
var checkQ3 = document.getElementById("check3");
var checkQ4 = document.getElementById("check4");
var checkQ5 = document.getElementById("check5");
var checkQ6 = document.getElementById("check6");
var checkQ7 = document.getElementById("check7");
var checkQ8 = document.getElementById("check8");
var checkQ9 = document.getElementById("check9");
var checkQ10 = document.getElementById("check0");
var testScore = document.getElementById("score");
var scorePercent = document.getElementById("percent");
var testMessage = document.getElementById("message");
var markBtn = document.getElementById("test-btn");

markBtn.addEventListener("click", markTest);

function markTest() {
  var score = 0;

  var firstAnswer = document.getElementById("answer1").value.toLowerCase();
  var secondAnswer = document.getElementById("answer2").value.toLowerCase();
  var thirdAnswer = document.getElementById("answer3").value.toLowerCase();
  var fourthAnswer = document.getElementById("answer4").value.toLowerCase();
  var fifthAnswer = document.getElementById("answer5").value.toLowerCase();
  var sixthAnswer = document.getElementById("answer6").value.toLowerCase();
  var seventhAnswer = document.getElementById("answer7").value.toLowerCase();
  var eighthAnswer = document.getElementById("answer8").value.toLowerCase();
  var ninthAnswer = document.getElementById("answer9").value.toLowerCase();
  var tenthAnswer = document.getElementById("answer0").value.toLowerCase();

  if (firstAnswer == `optimus prime` || firstAnswer == `optimus`) {
    checkQ1.innerHTML = `Correct`;
    checkQ1.style.color = `green`;
    score++;
  } else if (firstAnswer == ``) {
    checkQ1.innerHTML = `Answer the question!`;
    checkQ1.style.color = `purple`;
  } else {
    checkQ1.innerHTML = `Incorrect`;
    checkQ1.style.color = `red`;
  }

  if (secondAnswer == `megatron`) {
    checkQ2.innerHTML = `Correct`;
    checkQ2.style.color = `green`;
    score++;
  } else if (secondAnswer == ``) {
    checkQ2.innerHTML = `Answer the question!`;
    checkQ2.style.color = `purple`;
  } else {
    checkQ2.innerHTML = `Incorrect`;
    checkQ2.style.color = `red`;
  }

  if (
    thirdAnswer == "onslaught" ||
    thirdAnswer == "brawl" ||
    thirdAnswer == "blast off" ||
    thirdAnswer == "swindle" ||
    thirdAnswer == "vortex"
  ) {
    checkQ3.innerHTML = `Correct`;
    checkQ3.style.color = `green`;
    score++;
  } else if (thirdAnswer == ``) {
    checkQ3.innerHTML = `Answer the question!`;
    checkQ3.style.color = `purple`;
  } else {
    checkQ3.innerHTML = `Incorrect`;
    checkQ3.style.color = `red`;
  }

  if (
    fourthAnswer == `grimlock` ||
    fourthAnswer == "slag" ||
    fourthAnswer == "swoop" ||
    fourthAnswer == "snarl" ||
    fourthAnswer == "sludge"
  ) {
    checkQ4.innerHTML = `Correct`;
    checkQ4.style.color = `green`;
    score++;
  } else if (fourthAnswer == ``) {
    checkQ4.innerHTML = `Answer the question!`;
    checkQ4.style.color = `purple`;
  } else {
    checkQ4.innerHTML = `Incorrect`;
    checkQ4.style.color = `red`;
  }

  if (fifthAnswer == `unicron`) {
    checkQ5.innerHTML = `Correct`;
    checkQ5.style.color = `green`;
    score++;
  } else if (fifthAnswer == ``) {
    checkQ5.innerHTML = `Answer the question!`;
    checkQ5.style.color = `purple`;
  } else {
    checkQ5.innerHTML = `Incorrect`;
    checkQ5.style.color = `red`;
  }

  if (sixthAnswer == `trypticon`) {
    checkQ6.innerHTML = `Correct`;
    checkQ6.style.color = `green`;
    score++;
  } else if (sixthAnswer == ``) {
    checkQ6.innerHTML = `Answer the question!`;
    checkQ6.style.color = `purple`;
  } else {
    checkQ6.innerHTML = `Incorrect`;
    checkQ6.style.color = `red`;
  }

  if (seventhAnswer == `jazz`) {
    checkQ7.innerHTML = `Correct`;
    checkQ7.style.color = `green`;
    score++;
  } else if (seventhAnswer == ``) {
    checkQ7.innerHTML = `Answer the question!`;
    checkQ7.style.color = `purple`;
  } else {
    checkQ7.innerHTML = `Incorrect`;
    checkQ7.style.color = `red`;
  }

  if (eighthAnswer == `soundwave`) {
    checkQ8.innerHTML = `Correct`;
    checkQ8.style.color = `green`;
    score++;
  } else if (eighthAnswer == ``) {
    checkQ8.innerHTML = `Answer the question!`;
    checkQ8.style.color = `purple`;
  } else {
    checkQ8.innerHTML = `Incorrect`;
    checkQ8.style.color = `red`;
  }

  if (ninthAnswer == `starscream`) {
    checkQ9.innerHTML = `Correct`;
    checkQ9.style.color = `green`;
    score++;
  } else if (ninthAnswer == ``) {
    checkQ9.innerHTML = `Answer the question!`;
    checkQ9.style.color = `purple`;
  } else {
    checkQ9.innerHTML = `Incorrect`;
    checkQ9.style.color = `red`;
  }

  if (tenthAnswer == `1986`) {
    checkQ10.innerHTML = `Correct`;
    checkQ10.style.color = `green`;
    score++;
  } else if (tenthAnswer == ``) {
    checkQ10.innerHTML = `Answer the question!`;
    checkQ10.style.color = `purple`;
  } else {
    checkQ10.innerHTML = `Incorrect`;
    checkQ10.style.color = `red`;
  }

  var percentCalc = (score / 10) * 100;
  testScore.innerHTML = score;
  scorePercent.innerHTML = percentCalc;

  if (percentCalc == 100) {
    testMessage.innerHTML = `Perfect Score!`;
  } else if (percentCalc >= 80) {
    testMessage.innerHTML = `Great Job!`;
  } else if (percentCalc > 50) {
    testMessage.innerHTML = `Good Job!`;
  } else {
    testMessage.innerHTML = `Better Luck Next Time`;
  }
}
