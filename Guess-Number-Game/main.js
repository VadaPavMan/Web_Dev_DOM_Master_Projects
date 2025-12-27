const TakeNumber = document.getElementById("guessInput");
const DisplayBlock = document.getElementById("block");
const MessageBlock = document.getElementById("message");
const AttemptBlock = document.getElementById("attempts");
const GuessSubmit = document.getElementById("guessBtn");
const Reset = document.getElementById("resetBtn");
var attempts = 0;
let bool = false;
const randomNumber = getRandomInt(1, 100);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(num) {
  if (num > randomNumber) {
    MessageBlock.textContent = "Your Guess is High, Guess Lower..";
  } else if (num < randomNumber) {
    MessageBlock.textContent = "Your Guess is Low, Guess Higher..";
  } else {
    MessageBlock.textContent = "Correct, You Guessed It Righ. 🥳";
  }
}

TakeNumber.addEventListener("input", function () {
  if (TakeNumber.value.length > 0) bool = true;
});

GuessSubmit.addEventListener("click", () => {
  if (bool) {
    DisplayBlock.style.display = "inline";
    attempts += 1;
    console.log(randomNumber);
    console.log(TakeNumber.value);
    checkGuess(TakeNumber.value);
    AttemptBlock.textContent = `Number Of Attempts: ${attempts}`;
  }
});

Reset.addEventListener("click", () =>{
    bool = false;
    attempts = 0;
    TakeNumber.value = null;
    MessageBlock.textContent = ""
    AttemptBlock.textContent = ""
    DisplayBlock.style.display = "none"
})

