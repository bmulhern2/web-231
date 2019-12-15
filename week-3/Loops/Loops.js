/*
============================================
; Title: Assignment 3.4
; Author: Brendan Mulhern
; Date: 15 December 2019
; Modified By: Brendan Mulhern
; Description: Created a for loop though the for loop ran infittely so I made an if else statement where the numbers could be defined.
;===========================================
*/
// Defined variable
var variable = 9;
// Match function
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

// This is where the for loop is; I commented it out because it wouldn't run becuase it was infitite.
//for (let i = 0; i < 10; i++) {};
// Here is where I defined num1
if (i = 1) {
  var num1 = Math.floor(Math.random());
// Here is where I defined num3
} else if (i = 3) {
  var num3 = Math.floor(Math.random());
};
// Here is where the functions match; logmatch are run.
if (match(num1, num3) === "True") {
  logMatch(num1, num3);
// Here is where match and logMismatch are run.
} else if (match(num1, num3) === "False") {
  logMismatch(num1, num3);
};
