/*
============================================
; Title: Assignment 2.4 - Functions
; Author: Brendan Mulhern
; Date: 3 December 2019
; Modified By: Brendan Mulhern
; Description: This program reviews fundamental concepts related to Javascript Functions.
;========
*/
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
};
function dateWriter(year, month, day) {
  return day + "/" + month + "/" + year;
};
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
};
function convertToInt(string) {
  return parseInt(string);
};
function convertToFloat(string) {
  return parseFloat(string);
};
console.log(fullName("Brendan", "Mulhern"));
console.log(dateWriter(2019, 12, 3));
console.log(formatNumber(1.2020, 2));
console.log(convertToInt("5"));
console.log(convertToFloat("26.26"));
