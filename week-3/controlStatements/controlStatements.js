/*
============================================
; Title: Assignment 3.4
; Author: Brendan Mulhern
; Date: 15 December 2010
; Modified By: Brendan Mulhern
; Description Created a switch statement and ran a variable thorugh it.
;===========================================
*/

// Variable is defined.
let eventKeyCode = 13;

// Switch statement is created
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break
  case 16:
    console.log('The shift key was pressed.')
    break
  case 32:
    console.log('The spacebar key was pressed.')
    break
  case 8:
    console.log('The backspace / delete was pressed.')
    break
  case 23:
    console.log('Unrecognized key.')
    break
};

// end program
