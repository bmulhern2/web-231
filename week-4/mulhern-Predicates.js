/*
============================================
; Title: Assignment 4.4
; Author: Brendan Mulhern
; Date: 19 December 2019
; Modified By: Brendan Mulhern
; Description: This is a program of which prints the contents of an array; filters an array and checks to see if two values are the same.
;===========================================
*/
// Declares array of five states
var states = ["New Hampshire", "Maine", "Colorado", "Vermont", "Nebraska"];
var selected = "Colorado";
// Declares function getState with two sting parameters.
function getState(state, selected) {
// For loop testing to see if the states matcch the selected value.
for(i = 0; i < states.length; i++) {
// An if statement checking if the two strings match.
if (state[i] === selected) {
  console.log("True");
}}};

// Uses filter to call the getState function
var filteredStates = states.filter(getState);
// Displays content of orginal array
console.log("Original Array");
// For loop defining original Array
for (i = 0; i < states.length; i++) {
console.log(states[i]);
};
// Displays content of updates array
console.log("Filtered Array");
console.log(filteredStates);
// Displays selected value
console.log("Selected Value");
console.log(selected);
