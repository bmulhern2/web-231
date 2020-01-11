/*
============================================
; Title: Discussion Board 5.1
; Author: Brendan Mulhern
; Date: 9 January 2020
; Modified By: Brendan Mulhern
; Description: This program defines an array of composer objects and prints out the array.
;===========================================
*/
var realAndFakePeople = [
  {
    firstName: 'Herbie',
    lastName: 'Hancock',
  },

  {
    firstName: 'Joel',
    lastName: 'McGuinnes',
  },

  {
    firstName: 'Chris',
    lastName: 'Christopher',
  },

  {
    firstName: 'Brendan',
    lastName: 'Eich',
  },

  {
    firstName: 'Mike',
    lastName: 'Mikelson',
  },
];

realAndFakePeople.forEach(function(name){console.log(name.firstName + " " + name.lastName)});
