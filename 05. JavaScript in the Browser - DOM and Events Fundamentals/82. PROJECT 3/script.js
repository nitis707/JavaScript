"use strict";

// Seclecting elements
const score0Ele = document.querySelector("#score--0");
const score1Ele = document.getElementById("score--1");
const current0Ele = document.getElementById("current--0");
const current1Ele = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if(dice !== 1) {
        // Add dice to current score
        currentScore = currentScore + dice;
        current0Ele.textContent = currentScore; // change later
    } else {
        // Switch to next player
    }
})