"use strict";
// selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
//  starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2.display dice

  diceEl.classList.remove("hidden");
  diceEl.src = `/images/dice-${dice}.png`;
  // 3.check for rolled 1: if true, switch player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player
  }
});
