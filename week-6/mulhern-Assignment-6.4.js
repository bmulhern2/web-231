/*
============================================
; Title: Assignment 6.4
; Author: Brendan Mulhern
; Date: 13 January 2020
; Modified By: Brendan Mulhern
; Description: This is a program that covers Nested Object Literals.
;===========================================
*/

// Defines object: ticket.
var ticket = {
  id: "2000",
  name: "Parked In Wrong Spot",
  dateCreated: "1/13/20",
  priority: "No",
  person: {
    id: "2020",
    firstName: "Billy",
    lastName: "Jones",
    jobTitle: "Software Enginner 2"
  }
}

// Prints out name
console.log("Brendan Mulhern");
// Prints out assignment
console.log("Assignment 6.4");
// Prints out date
console.log("1/13/20");
// New line
console.log("");
// Prints out ticket information
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
