/*
============================================
; Title: Assignment 6.1
; Author: Bohnet Christine
; Date: 13 January 2020
; Modified By: Brendan Mulhern
; Description: 2 errors
============================================
*/

//Define the ticket object with person nested object
var ticket = {id:"105",
              name:"Help Desk Support",
              dateCreated: new Date(),
              priority:"1",
            person: {id:"105",
                     firstName: "Bob",
                     lastName: "Jones",
                     jobTitle: "Programmer I"

            }
        };

//Display expected output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + "(" + ticket.person.jobTitle + ").");
