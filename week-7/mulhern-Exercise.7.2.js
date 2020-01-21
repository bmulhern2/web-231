/*
============================================
; Title: Exercise 7.2
; Author: Brendan Mulhern
; Date: 21 January 2020
; Modified By: Brendan Mulhern
; Description: This is a program of which uses Constuctor Functions.
;===========================================
*/

function employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  };

var employees = [
  new employee(1, 'Tom', 'Weasley', 'Programmer'),
  new employee(2, 'Ron', 'Weasley', 'Programmer'),
  new employee(3, 'Ginney', 'Weasley', 'Programmer'),
  new employee(4, 'Fred', 'Weasley', 'Programmer'),
  new employee(5, 'Greg', 'Weasley', 'Programmer')
];

console.log("Brendan" + " Mulhern");
console.log("Exercise 7.2");
console.log("1/21/20");

for(i=0; i<6; i++) {
  console.log(employees[i]['id'] + " " + employees[i]['firstName'] + " " + employees[i]['lastName'] + " " + employees[i]['title'])};
