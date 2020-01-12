/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   12 Jan 2020
; Modified By: Brendan Mulhern
; Description: Program that contains two errors
;===========================================
*/

// declaring cars array of objects;
var cars = [
  { make: "Audi", model: "S3" },
  { make: "BMW", model: "M3" },
  { make: "Ford", model: "Escort" }
];

// returning a string array of the map() that is concatenating text with the make and model of the cars array
cars.forEach(function(car){console.log(`The make is: ${car.make} and the model is: ${car.model}`)});
