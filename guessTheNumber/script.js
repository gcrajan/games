"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   When player wins
  if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "25rem";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".left").style.visibility = "hidden";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When it's too high
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "It's too high.";
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
      // document.querySelector("body").style.backgroundColor = "#FF4500";

      document.querySelector(".left").style.visibility = "hidden";
    }

    // When it's too low
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "It's too low.";
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector(".score").textContent = 0;
      // document.querySelector("body").style.backgroundColor = "#FF4500";

      document.querySelector(".left").style.visibility = "hidden";
    }
  }

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //   location.reload();
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".left").style.visibility = "visible";
});
