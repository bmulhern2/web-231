/*
============================================
; Title: Discussion Board 5.1
; Author: Brendan Mulhern
; Date: 9 January 2020
; Modified By: Brendan Mulhern
; Description: This is a keyed collection program with two intentional errors in it.
;===========================================
*/

// Declares a new map of buildings
var soccerPosition = new Map();

// Sets maps to be of type position "Goalie" with the corresponding function "save"
const position1 = soccerPosition.set('Goalie', 'Save');

// Sets maps to be of type position "Defense" with the corresponding function "defend"
const position2 = soccerPosition.set('Defense', 'Defend');

// Sets maps to be of type position "Midfield" with the corresponding function "pass"
const position3 = soccerPosition.set('Midfield', 'Pass');

// Sets maps to be of type position "Striker" with the corresponding function "score"
const position4 = soccerPosition.set('Striker', 'Score');

// Sets maps to be of type position "Coach" with the corresponding function "coach"
const position5 = soccerPosition.set('Coach', 'Coach');

// Defines a function of printPositions
function printPositions(key, value) {
// Defines a for loop that prints positions

for (i=0; i <= 4; i++) {
  console.log(key + ' gets to ' + value);
}};

// Prints Poistions
printPositions();
