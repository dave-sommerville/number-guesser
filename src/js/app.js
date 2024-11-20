'use strict';


//		Assign a random value within a certain range to a variable 
// 		If /else/else for larger, smaller, and correct 
//		Accepts input and validations 
//		Validation means: trimmed, it is a number and the number within range 
//		Error try and catches 
//		Submit button or enter 

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

