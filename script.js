'use strict';

//Selecting elements
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

let currentScore = 0;

//Rolling Dice Functionalities
btnRoll.addEventListener('click', function () {
  //Generating a random dice roll
  const score = Math.trunc(Math.random() * 6) + 1;

  //Display Dice
  dice.classList.remove('hidden');
  dice.src = `dice-${score}.png`;

  //When the dice roll is 1
  if (score !== 1) {
    currentScore += score;
    current0.textContent = currentScore;
  } else {
  }
});
