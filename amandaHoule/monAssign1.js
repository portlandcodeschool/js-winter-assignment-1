// amanda houle
// Javascript class - Monday, Jan 13th Assignment

var myName = "amanda houle";
var currentYear = 2014;
var birthYear = 1974;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = "Kalamazoo, MI";
var mom = "Anne";
var dad = "Dennie";
console.log ("Hi, my name is " + myName + ".  Nice to meet you!");
console.log ("Well, ahem, I am excited to announce that, in November, I will be turning " + myAge + " this year!")
console.log ("As of now, I am " + (decades - 1) + " decades and " + (yearRemainder + 9) + " years old.")
// On three seperate, indented lines, list out your birthplace, mother's name, and father's name
console.log ("Here are some of my vital stats: \n \t Birthplace: " + birthPlace + "; \n \t Mother's name:  " + mom + "; \n \t Father's name:  " + dad + ".")
if (myAge > 30) {console.log('Oh my, how the years have passed.')};