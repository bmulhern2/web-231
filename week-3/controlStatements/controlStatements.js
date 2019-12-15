/*
============================================
; Title: Assignment 3.4
; Author: Brendan Mulhern
; Date: 15 December 2010
; Modified By: Brendan Mulhern
; Description:
;===========================================
*/

let eventKeyCode = 13;

switch (eventKeyCode) {
  case "A": (eventKeyCode === 13)
    console.log('The enter key was pressed.')
    break
  case "B": (eventKeyCode === 16)
    console.log('The shift key was pressed.')
    break
  case "C": (eventKeyCode === 32)
    console.log('The spacebar key was pressed.')
    break
  case "D": (eventKeyCode === 8)
    console.log('The backspace / delete was pressed.')
    break
  case "E":
    console.log('Unrecognized key.')
    break
};
