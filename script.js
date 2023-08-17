'use strict';

//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting values
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

//funtions
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling Dice Functionalities
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    //Generating a random dice roll
    const score = Math.trunc(Math.random() * 6) + 1;

    //Display Dice
    dice.classList.remove('hidden');
    dice.src = `./res/dice-${score}.png`;

    //When the dice roll is 1
    if (score !== 1) {
      currentScore += score;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    //Add the current score to the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      //Check if anyones score is 100 and end the game
      dice.classList.add('hidden');
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
});
