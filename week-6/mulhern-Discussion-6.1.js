/*
============================================
; Title: Discussion Board 6.1
; Author: Brendan Mulhern
; Date: 12 January 2020
; Modified By: Brendan Mulhern
; Description: This program has two errors in it.
;===========================================
*/

// Intented output:
// Cat
// Dog
// Horse
// Bear
// Deer

// Defines Array
var animals = [
  {
    Species: "Cat"
  },
  {
    Species: "Dog"
  },
  {
    Species: "Horse"
  },
  {
    Species: "Bear"
  },
  {
    Species: "Deer"
  },
];

// Prints out Array
animals.forEach((animal){console.log(animals.Species)});
