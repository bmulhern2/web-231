/*
============================================
; Title: Discussion Board 5.1
; Author: Brendan Mulhern
; Date: 9 January 2020
; Modified By: Brendan Mulhern
; Description: This program defines an array by genre and prints out the array.
;===========================================
*/

// Defines array of famous music artists
var famousMusicArtists = [
  {
    firstName: "Joel",
    lastName: "Zimmerman",
    genre: "EDM",
    rating: "5",
  },
  {
    firstName: "Chris",
    lastName: "Comstock",
    genre: "EDM",
    rating: "5",
  },
  {
    firstName: "Herbie",
    lastName: "Hancock",
    genre: "Jazz",
    rating: "4",
  },
  {
    firstName: "Matthew",
    lastName: "Samuels",
    genre: "Hip-Hop",
    rating: "4",
  },
  {
    firstName: "Isabelle",
    lastName: "Rezazadeh",
    genre: "Electronic",
    rating: "3",
  },
];
// Prints the artist by rating
console.log("By Rating:");
famousMusicArtists.map(function(name){console.log(name.rating + " " + name.firstName + " " + name.lastName)});

// Prints the artist by genre
console.log(" ");
console.log("By Genre:");
famousMusicArtists.map(function(name){console.log(name.genre + " " + name.firstName + " " + name.lastName)});

// Prints the whole contents of the array
console.log(" ");
console.log("Complete Array:");
famousMusicArtists.forEach(function(name){console.log(name.firstName + " " + name.lastName + " " + name.genre + " " + name.rating)});
