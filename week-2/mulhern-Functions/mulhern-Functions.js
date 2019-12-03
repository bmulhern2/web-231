/*
============================================
; Title: Assignment 2.4 - Functions
; Author: Brendan Mulhern
; Date: 3 December 2019
; Modified By: Brendan Mulhern
; Description: This program reviews fundamental concepts related to Javascript Functions.
;========
*/

function fullName(firstName, lastName) { // Creates a function with the firstName and lastName Parameters
  return firstName + " " + lastName; // Adds together firstName and lastName to create fullName
};
function dateWriter(year, month, day) { //Creates function with parameters year; month; day.
  return day + "/" + month + "/" + year; //Creates the date with the three parameters
};
function formatNumber(number, numOfFixedPositions) { // Creates function formatNumber with parameters number and numOfFixedPositions 
  return number.toFixed(numOfFixedPositions); // Rounds the number to two decimal places
};
function convertToInt(string) { // Creates function convertToInt with parameter string 
  return parseInt(string); // Parses string and returns Int from which the string variables is to defined to
};
function convertToFloat(string) { // Creates convertToFloat function with parameter string
  return parseFloat(string); // Parses the string and returns a float
};
console.log(fullName("Brendan", "Mulhern")); // Prints out the fullName function
console.log(dateWriter(2019, 12, 3)); // Prints out the dateWriter function  
console.log(formatNumber(1.2020, 2)); // Prints out the formatNumber function  
console.log(convertToInt("5")); // Prints out the convertToInt function  
console.log(convertToFloat("26.26")); // Prints out the convertToFloat function  
