/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 26 November 2019
; Modified By: Brendan Mulhern
; Description: Employee Records with variable declarations
;========
*/
// Employee 1
var firstName1 = "Bob"; // Declaring the firstName Variable
var lastName1 = "Masterson"; // Declaring the lastName Variable
var address1 = "57 Main Street"; // Declaring the adddress Variable
var payRate1 = 20.05; // Delcaring the payRate Variable
payRate1 = payRate1.toFixed(1); // Rounds the payRate Variable to one Decimal Place
var hireDate1 = new Date(2011, 5, 10); // Declaring the hireDate Variable

// Employee 1
var firstName2 = "Tyler"; // Declaring the firstName Variable
var lastName2 = "Bennett"; // Declaring the lastName Variable
var address2 = "21 Pearl Street"; // Declaring the address2 Varaiable
var payRate2 = 25.65; // Delcaring the payRate Variable
payRate2 = payRate2.toFixed(1); // Rounds the payRate Variable to one Decimal Place
var hireDate2 = new Date(2013, 2, 10); // Declaring the hireDate Variable

// Employee 1
var firstName3 = "Joel"; // Declaring the firstName Variable
var lastName3 = "McGinness"; // Declaring the lastName Variable
var address3 = "25 East Drive"; // Declaring the adddress Variable
var payRate3 = 30.75; // Delcaring the payRate Variable
payRate3 = payRate3.toFixed(1); // Rounds the payRate Variable to one Decimal Place
var hireDate3 = new Date(2015, 15, 7); // Declaring the hireDate Variable

console.log("Employee 1: ");
console.log("Name: " + firstName1 + " " + lastName1);
console.log("Address: " + address1);
console.log("Pay Rate: " + payRate1);
console.log("Hire Date: " + hireDate1);

console.log("Employee 2: ");
console.log("Name: " + firstName2 + " " + lastName2);
console.log("Address: " + address2);
console.log("Pay Rate: " + payRate2);
console.log("Hire Date: " + hireDate2);

console.log("Employee 3: ");
console.log("Name: " + firstName3 + " " + lastName3);
console.log("Address: " + address3);
console.log("Pay Rate: " + payRate3);
console.log("Hire Date: " + hireDate3);
