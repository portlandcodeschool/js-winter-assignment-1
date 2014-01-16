var myName = "Ian" + " " + "Forrest";
var currentYear = 2014;
var birthYear = 1981;
var myAge = (currentYear - birthYear);
var decades = Math.floor(myAge / 10) + " decades";
var yearRemainder = (myAge % 10) + " years old.";
var birthPlace = "Calgary, Canada";
var mom = "Barbara";
var dad = "Robert";

console.log("Good morning, my name is " + myName + ".");
console.log("This year, I will turn " + myAge + ".");
console.log("In other words, I will be " + decades + " and " + 
	yearRemainder);
console.log("Here are some fun facts about myself: \n \t Birthplace: " + birthPlace + "\n \t Mother's name: " + mom + "\n \t Father's name: " + dad); 

if (myAge > 30) {console.log("Oh my, how the years have passed.")};

