'use strict';
// Reset button needs adjusting 

/*------------------------------------------------------->

<-------------------------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

function addClass(element, customClass) {
  element.classList.add(customClass);
  return element;
}

function removeClass(element, customClass) {
  element.classList.remove(customClass);
  return element;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*------------------------------------------------------->

<-------------------------------------------------------*/

const guessCounterDisplay = select('.guess-counter');
const playerInput = select('.player-input');
const accuracyReport = select('.accuracy');
const startBtn = select('.start');
const restartBtn = select('.restart');

/*------------------------------------------------------->

<-------------------------------------------------------*/

let guessCounter = 0;
let compNum;

/*------------------------------------------------------->

<-------------------------------------------------------*/

function pickNum() {
  compNum = getRandomNumber(1, 100);
  return compNum;
}

function getGuess() {
  let playerGuess = Number(playerInput.value.trim());
  if (!isNaN(playerGuess) && playerGuess > 0 && playerGuess <= 100) {
    return playerGuess;
  } else {
    console.log('Please enter a valid number between 1 and 100');
    accuracyReport.textContent = 'Invalid input. Enter a number between 1 and 100.';
  }
}

function countGuess() {
  guessCounter++;
  guessCounterDisplay.textContent = `Guesses: ${guessCounter}`;
  return guessCounter;
}

function compareNum(playerNum) {
  if (compNum === playerNum) {
    console.log('You got it!');
    accuracyReport.textContent = 'You got it!';
  } else if (compNum > playerNum) {
    console.log('You guessed less than my number');
    accuracyReport.textContent = 'Too low!';
  } else {
    console.log('You guessed more than my number');
    accuracyReport.textContent = 'Too high!';
  }
}

function resetGame() {
  playerNum = 0;
  guessCounter = 0;
  compNum = pickNum();
  guessCounterDisplay.textContent = `Guesses: ${guessCounter}`;
  accuracyReport.textContent = '';
  playerInput.value = '';
}

/*------------------------------------------------------->

<-------------------------------------------------------*/

listen('click', startBtn, () => {
  compNum = pickNum();
  console.log(`Random number picked: ${compNum}`);
  accuracyReport.textContent = 'Game started! Make your first guess.';
});

listen('keydown', playerInput, (ev) => {
  if (ev.key === 'Enter') {
    const playerNum = getGuess();
    if (playerNum !== undefined) {
      countGuess();
      compareNum(playerNum);
    }
  }
	playerInput.value = '';
});

listen('click', restartBtn, () => {
  resetGame();
});
