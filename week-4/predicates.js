/*
============================================
; Title: Assignment 4.4
; Author: Brendan Mulhern
; Date: 19 December 2019
; Modified By: Brendan Mulhern
; Description:
;===========================================
*/
// Declares array of five states
var states = ["New Hampshire", "Maine", "Colorado", "Vermont", "Nebraska"];

// Declares function getState with two sting parameters.
function getState(state1, state2) {
// An if statement checking if the two strings match.
if (state1 === state2) {
  console.log("True");
}};

// Uses filter to call the getState function
var filteredStates = states.filter(getState);
// Displays content of orginal array
console.log("Original Array");
console.log(states);
// Displays content of updates array
console.log("Updated Array");
console.log(filteredStates);
// Displays selected value
console.log("Selected Value");
console.log(filteredStates);
