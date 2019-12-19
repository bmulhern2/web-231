/*
============================================
; Title: Exercise 4.2 - Arrays
; Author: Brendan Mulhern
; Date: 19 December 2019
; Modified By: Brendan Mulhern
; Description: This is a program that displays the qualities of arrays.
;===========================================
*/

// Defines an array of five different fruits
var fruit = ["Pear", "Apple", "Orange", "Blackberry", "Blueberry"];
// Defines function getFruit with parameter array.
function getFruit(array) {
// Prints out the array with a for loop
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}};
// Runs the function with the fruit array.
getFruit(fruit);
