'use strict';

//Selecting elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting values
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

//Rolling Dice Functionalities
