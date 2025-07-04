// 1. Get all the nodes from HTML
const againbutton = document.querySelector(".btn-again");
const num = document.querySelector(".number");
const guessInput = document.getElementById("guess-input");
const checkbtn = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const scoreSpan = document.querySelector(".score1");
const highscoreSpan = document.querySelector(".highscore1");

// 2. Generate random number
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log("Random Number:", random);

// 3. Check button function
const checkFunc = () => {
  const guess = Number(guessInput.value);
  console.log("User Guess:", guess);

  // 3.1 Check user has entered a number or not
  if (!guess) {
    message.textContent = "Please enter a number.";
  } else if (guess === random) {
    // 3.2 Check the value is equal
    message.textContent = "You win!";
    num.textContent = random;
    document.body.style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      highscoreSpan.textContent = highscore;
    }
  } else {
    // 3.3 Incorrect guess
    if (score > 1) {
      message.textContent = guess < random ? "Too low." : "Too high.";
      score -= 1;
      scoreSpan.textContent = score;
    } else {
      message.textContent = "Game over.";
      scoreSpan.textContent = 0;
    }
  }
};

// 4. Again button function
const againFunc = () => {
  document.body.style.backgroundColor = "#222"; // reset background
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreSpan.textContent = score;
  guessInput.value = "";
  num.textContent = "?";
  message.textContent = "Start guessing...";
};

// 5. Attach event listeners
checkbtn.addEventListener("click", checkFunc);
againbutton.addEventListener("click", againFunc);
