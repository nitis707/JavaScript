/* 

The Math. trunc() method returns the integer part of a number. The Math. trunc() method removes the decimals (does NOT round the number).

The JavaScript textContent property works to set and get the page's text content. It is used to pass and display the text content of some information, tags, and large size of data and its nodes.

*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
});