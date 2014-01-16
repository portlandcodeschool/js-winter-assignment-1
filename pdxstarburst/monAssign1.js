var myName = "Jenna Gretsch";

var currentYear = 2014;
var birthYear = 1900;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
//console.log(decades);
var yearRemainder = myAge % 10 ;
//console.log(yearRemainder);
var birthPlace = "Red Spot, Jupiter";
var mom = "Minnie Mouse";
var dad = "Mickey Mouse"; 
console.log("Howdy! My name is " + myName + ".");
console.log("Extraordinarily I will be " + myAge + " this year!!");
console.log("I have lived a long " + decades + " decades and " + yearRemainder + " years.");
console.log("More quid to chew on: \n   I was born in " 
	+ birthPlace + ".\n   " 
	+ "My Mom's name is " + mom + ".\n   " 
	+ "My Dad's name is " + dad + ".");	
if (myAge > 30) {console.log('Oh my, how the years have passed.')};