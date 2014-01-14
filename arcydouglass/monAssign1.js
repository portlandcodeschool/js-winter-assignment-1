
//Assignment 01 
//Javascript class
//Arcy Douglass
//January 14, 2014

//Variables
var myName = "Arcy Douglass";
var currentYear = 2014;
var birthYear = 1972;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge/ 10);
var yearRemainder = myAge % 10;
var birthPlace = "Los Gatos, CA";
var mothersName = "Julie";
var fathersName = "Richard";

//Output statements to console
console.log("");
console.log("Hello, my name is " + myName + ".");
console.log("When I celebrate my birthday this year, I will be " + myAge + ".");
console.log("I have been alive for " + decades + " decades and " + yearRemainder + " year(s).");
console.log("The following are some of my vital stats:");
console.log("     Birthplace:  " + birthPlace);
console.log("     Mother's name:  " + mothersName);
console.log("     Father's name:  " + fathersName);
console.log("");

//Expression
if ( myAge > 30){
  console.log("Oh my, how the years have passed.");
}
console.log("");
