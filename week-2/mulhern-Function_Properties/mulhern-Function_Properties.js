/*
============================================
; Title: Assignment 2.3 - Function Properties
; Author: Brendan Mulhern
; Date: 3 December 2019
; Modified By: Brendan Mulhern
; Description: This program exemplifies properties used in Javascript Functions.
;========
*/
var myName = function() { return myName.brendan}; // Declares Function myName and allows this function to equal myName.brendan
myName.brendan = "Brendan"; // Allows for myName.brendan to equal "Brendan"
console.log(myName()); // Prints the output of the function myName which equals myName.brendan which equals "Brendan"
