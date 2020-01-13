/*
============================================
; Title: Exercise 6.3
; Author: Brendan Mulhern
; Date: 12 January 2020
; Modified By: Brendan Mulhern
; Description: This is a program that covers Object Literals
;===========================================
*/
// Defines array
var ticketSystem = [
  {
    id: "1",
    name: "Sally Mae",
    requestor: "259584"
  }
];

// Prints out array
ticketSystem.forEach(function(ticketSystem){console.log(ticketSystem.id + " " + ticketSystem.name + " " + ticketSystem.requestor)});
