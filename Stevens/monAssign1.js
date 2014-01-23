var myName = 'Abby Stevens';
var currentYear = '2014';
var birthYear = '1982';
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = "Midland, TX";
var mom = 'Ellen';
var dad = 'John';

console.log("Hello, my name is " + myName + ".");
console.log("This year I will be " + myAge + " years old.");
console.log("I will be " + decades + " decades and " + yearRemainder + " years old.");
console.log("Here are my vital stats:\n\t" + "Birthplace: " + birthPlace + "\n\t" + "Mom's name: " + mom + "\n\t" + "Dad's name: " + dad)

if (myAge > 30)
	{console.log('Oh my, how the years have passed.')}