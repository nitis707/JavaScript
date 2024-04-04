// Seclecting elements
const current0Ele = document.getElementById("current--0");
const current1Ele = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

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