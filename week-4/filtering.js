/*
============================================
; Title: Exercise 4.3 - Filtering
; Author: Brendan Mulhern
; Date: 19 December 2019
; Modified By: Brendan Mulhern
; Description: ; Description: This program prints out the contents of an array and matches a selcted value.
;===========================================
*/
// Creats a string array of 5 vehicles
var vehicles = ["Dodge", "BMW", "Jeep", "Prius", "Volvo"];
// Creats function getValue with the array and string parameters
function getValue(arr, string) {
  // Prints out the Array Items with a for loop.
        console.log("Displaying Array Items:")
        for (x = 0; x < arr.length; x++) {
          console.log(arr[x])};
// New Space with console.log.
          console.log("");
// Displays the selected value text.
          console.log("Selected Value:");
// Defines a for loop with length of arr.
  for(i = 0; i < arr.length; i++) {
// An if statement checking to see if an item in an array equals a selected value.
    if (arr[i] === string) {
// Prints out the selected value.
      console.log(arr[i]);
}}};
// Runs the function with the paremeters of the array and a selected value.
getValue(vehicles, "Volvo");
