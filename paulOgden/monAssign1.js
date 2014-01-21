//Paul Ogden
//Assignment 1

var myName = "Paul Ogden";
var currentYear = 2014;
var birthYear = 1983;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = "Long Island, NY";
var mom = "Debora D'alto";
var dad = "Harry Gerard Ogden III";
console.log ("Hello.  My name is " + myName + ".");
console.log ("This year I will be turning " + myAge + " years old.");
console.log ("This turns out to be " + decades + " decades and " + yearRemainder + " years.");
console.log ("Here are some of my vital stats: \n \t Birthplace: " + birthPlace + " \n \t Mother's name:  " + mom + " \n \t Father's name:  " + dad);
if (myAge > 30) {console.log('Oh my, how the years have passed.')};