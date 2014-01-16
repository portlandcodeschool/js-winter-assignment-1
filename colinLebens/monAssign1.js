// JS Winter Assignment 1
// Colin Lebens
// Portland Code School, Winter 2014

var myName="Colin Lebens";
var currentYear=2014;
var birthYear=1982;
var myAge=2014-1982;
var decades=Math.floor(myAge / 10);
var yearRemainder=myAge%10;

var birthPlace="Omaha, NE";

var mom="Susan Lebens";
var dad="Mike Lebens";

console.log("\nHello, I'm " + myName + ".");
console.log("I will turn " + myAge + " this year.");
console.log("I am " + decades + " decades and " + yearRemainder + " years old.");
console.log("Here are my vital stats:\n\t" + 
	"birthplace:" + birthPlace + "\n\t" + 
	"mother's name: " + mom + "\n\t" + 
	"father's name: " + dad);

if (myAge > 30) { console.log("Oh my how the years have passed.\n"); }