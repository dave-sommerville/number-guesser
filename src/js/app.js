'use strict';


//		Assign a random value within a certain range to a variable 
// 		If /else/else for larger, smaller, and correct 
//		Accepts input and validations 
//		Validation means: trimmed, it is a number and the number within range 
//		Error try and catches 
//		Submit button or enter 

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

const guessCounter = select('.guess-counter');
const playerInput = select('.player-input');
const accuracyReport = select('.accuracy');
const startBtn = select('.start');
const restartBtn = select('.restart');

/*------------------------------------------------------->

<-------------------------------------------------------*/

function pickNum() {
	let compNum = getRandomNumber(1, 100);
	return compNum;
}

function getGuess() {
	let playerGuess= Number(playerInput.value.trim());
	if (playerGuess !== Nan && playerGuess > 0 && playerGuess < 100) {
		let playerNum = playerGuess;
		return playerNum;
	} else {
		console.log('Please enter a valid number between 1 and 100');
	}
	playerInput.value = '';
}

function countGuess(){

}

function compareNum() {
	if(compNum === playerNum) {
		console.log('You got it!');
	} else if(compNum > playerNum) {
		console.log('You guessed less than my number');
	} else if(compNum < playerNum) {
		console.log('You guessed more than my number');
	}
}

function resetGame() {
	let playerNum = 0;
	return playerNum;
}

