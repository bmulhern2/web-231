/*
============================================
; Title: Discussion Board 6.1
; Author: Brendan Mulhern
; Date: 12 January 2020
; Modified By: Brendan Mulhern
; Description: This is a program that uses Exception Handling.
;===========================================
*/

// Defines the try part which has three variables
try {
  var z = 27;
  var y = 3;
  var x = z/y;
// If x = 9 print x is 9
  if(x == 9) {
    console.log("X is 9");
  };
// Catch if there's an error
} catch (err) {
  console.log("There was an error");
// Finally printing that the program is done.
} finally {
  console.log("Program done");
}
