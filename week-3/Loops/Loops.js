/*
============================================
; Title: Assignment 3.4
; Author: Brendan Mulhern
; Date: 15 December 2019
; Modified By: Brendan Mulhern
; Description:
;===========================================
*/

var variable = 9;

function match(num1, num2) {
  if (num1 === num2) {
    console.log("True");
  } else {
    console.log("False");
  }};

// Defines the function logMismatch which states if the numbers are not equal or not.
function logMismatch(num1, num2) {
    console.log(num1 + " does not equal " + num2);
    };

// Defines the function logMatch which states if the two values are equal.
function logMatch(num1, num2) {
    console.log(num1 + " does equal " + num2);
};


//for (let i = 0; i < 10; i++) {};
if (i = 1) {
  var num1 = Math.floor(Math.random());
} else if (i = 3) {
  var num3 = Math.floor(Math.random());
};

if (match(num1, num3) === "True") {
  logMatch(num1, num3);
} else if (match(num1, num3) === "False") {
  logMismatch(num1, num3);
};
