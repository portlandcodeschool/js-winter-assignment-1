//Sean Sauve
//Portland Code School
//Javascript course
//Monday Assignment #1

var myName = "Sean Sauve";
var currentYear = 2014;
var birthYear = 1986;
var myAge = 28;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = "Chicago";
var mom = "Donna";
var dad = "Jerry";
console.log('Hi my name is',  myName);
console.log('I will be', myAge, 'years old this year');
console.log('I have been alive for', decades, 'decades and', yearRemainder, 'years.');
console.log('Here are my vital stats:', '\n\tBirthplace:',birthPlace, '\n\tMother:', mom, '\n\tFather:', dad);
if (myAge > 30) {console.log('Oh my, how the years have passed.')};	// prints nastalgic comment if over 30 years old

//comments look like this in java
/*multi line comments
look like this */

