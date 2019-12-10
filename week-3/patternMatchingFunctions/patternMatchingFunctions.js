/*
============================================
; Title: Exercise 3.2
; Author: Brendan Mulhern
; Date: 10 December 2019
; Modified By: Brendan Mulhern
; Description: This is a program that seeks to find the anwswer of the question "Does 24 equal 24?".
;===========================================
*/

// Program Start
// Define num1 and num2; the two test variables.
var num1 = 24;
var num2 = 24;

// Defines the function match; which tests to see if the test variables are equal.
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

// This is a program that tests to see if the two varaibles are equal and if so prints out whether they are equal or not equal.
if (match(num1, num2)) {
  logMismatchMatch(num1, num2);
} else {
  logMatch(num1, num2);
};

// End Program
