/*
============================================
; Title: Assignment 6.4
; Author: Brendan Mulhern
; Date: 13 January 2020
; Modified By: Brendan Mulhern
; Description: This is a program that covers Nested Object Literals.
;===========================================
*/
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

console.log("Brendan Mulhern");
console.log("Assignment 6.4");
console.log("1/13/20");
console.log("");
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
