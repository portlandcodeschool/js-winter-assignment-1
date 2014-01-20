var myName = "Andrew DuBrock";
var currentYear = 2014;
var birthYear = 1969;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = Math.floor(myAge % 10);
var birthPlace = "Sitka, AK";
var mom = "Patricia Romack";
var dad = "Roger DuBrock";

console.log("Hello, my name is "  + myName + ".");
console.log("This year, I will turn " + myAge + " in February.");
console.log("Looking at that another way, I'll be " + decades + " decades and " + yearRemainder + " years old.");
console.log("Here are my vital statistics:\n\tbirthplace: " + birthPlace + 
                                         "\n\tmother's name: " + mom + 
                                         "\n\tfather's name: " + dad)

if (myAge > 30) {console.log('Oh my, how the years have passed.')};
if (myAge > 40) {console.log('And they keep on passing...')}