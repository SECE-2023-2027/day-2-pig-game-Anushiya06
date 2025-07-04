const score0 = document.getElementById("score0");
const score1 = document.getElementById("score1");
const current0 = document.getElementById("current0");
const current1 = document.getElementById("current1");
const name0 = document.getElementById("name0");
const name1 = document.getElementById("name1");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");
const newGameBtn = document.querySelector(".btn-new");
const diceImg = document.querySelector(".dice-img");

let scorePlayer0;
let scorePlayer1;
let currentScore;
let activePlayer;
let playing;

function init() {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = "0";
  score1.textContent = "0";
  current0.textContent = "0";
  current1.textContent = "0";
  diceImg.src = "img/1.jpg";

  player0.classList.add("active");
  player1.classList.remove("active");
}

init();

function switchPlayer() {
  if (activePlayer === 0) {
    current0.textContent = "0";
    activePlayer = 1;
    player0.classList.remove("active");
    player1.classList.add("active");
  } else {
    current1.textContent = "0";
    activePlayer = 0;
    player1.classList.remove("active");
    player0.classList.add("active");
  }
  currentScore = 0;
}

rollBtn.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `img/${dice}.jpg`;

    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      if (activePlayer === 0) {
        current0.textContent = currentScore;
      } else {
        current1.textContent = currentScore;
      }
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    if (activePlayer === 0) {
      scorePlayer0 += currentScore;
      score0.textContent = scorePlayer0;
      if (scorePlayer0 >= 100) {
        playing = false;
        alert(name0.textContent + " wins!");
      } else {
        switchPlayer();
      }
    } else {
      scorePlayer1 += currentScore;
      score1.textContent = scorePlayer1;
      if (scorePlayer1 >= 100) {
        playing = false;
        alert(name1.textContent + " wins!");
      } else {
        switchPlayer();
      }
    }
  }
});

newGameBtn.addEventListener("click", init);
