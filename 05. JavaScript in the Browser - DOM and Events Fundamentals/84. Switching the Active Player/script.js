// Seclecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

/*
So the reason is that we will store the scores of both players in an array. So let me do that here. So let or actually const, because it's an array.
*/
const scores = [0, 0];
let activePlayer = 0;

if (dice != 1) {
    // Add dice to current score
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
    // Switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}