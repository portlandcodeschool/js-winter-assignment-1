var myName = "Ian" + " " + "Forrest";
var currentYear = 2014;
var birthYear = 1981;
var myAge = (currentYear - birthYear);
var decades = Math.floor(myAge / 10) + " decades";
var yearRemainder = (myAge % 10) + " years old.";
var birthPlace = "Calgary, Canada";
var mom = "Barbara";
var dad = "Robert";

console.log("You are invited to the wedding of Reese Witherspoon and " + myName + ".");
console.log("Reese will be 37 this year. Ian will be " + myAge + ".");
console.log("In other words, Ian will be " + decades + " and " + 
	yearRemainder);
console.log("Here are some facts about the groom: \n \t Birthplace: " + birthPlace + "\n \t Mother's name: " + mom + "\n \t Father's name: " + dad); 

if (myAge > 30) {console.log("Oh my, how the years have passed.")};

