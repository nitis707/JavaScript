"use strict";

// Seclecting elements
const score0Ele = document.querySelector("#score--0");
const score1Ele = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

// Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEl.classList.add("hidden");
