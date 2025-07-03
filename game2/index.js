const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");
const rollBtn = document.querySelector(".btn-roll");
const holdBtn = document.querySelector(".btn-hold");
const newGameBtn = document.querySelector(".btn-new");
const diceImg = document.querySelector(".dice-img");

let scores, currentScore, activePlayer, playing;
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceImg.src = "/INTERSHIP 25/DAY2/game2/img/1.jpg";

  player0El.classList.add("active");
  player1El.classList.remove("active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("active");
  player1El.classList.toggle("active");
};

rollBtn.addEventListener("click", () => {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `/INTERSHIP 25/DAY2/game2/img/${dice}.jpg`;
    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      alert(`Player ${activePlayer + 1} wins!`);
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener("click", init);
