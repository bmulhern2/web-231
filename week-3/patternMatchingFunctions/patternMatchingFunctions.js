/*
============================================
; Title: Exercise 3.2
; Author: Brendan Mulhern
; Date: 10 December 2019
; Modified By: Brendan Mulhern
; Description:
;===========================================
*/
var num1 = 24;
var num2 = 24;

function match(num1, num2) {
  if (num1 === num2) {
    console.log("True");
  } else {
    console.log("False");
  }};

function logMismatch(num1, num2) {
    console.log(num1 + " does not equal " + num2);
    };

function logMatch(num1, num2) {
    console.log(num1 + " does equal " + num2);
};

if (match(num1, num2)) {
  logMismatchMatch(num1, num2);
} else {
  logMatch(num1, num2);
};
