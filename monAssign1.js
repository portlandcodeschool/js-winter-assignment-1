var myName = 'Kathryn Stoddard';
var currentYear = 2014;
var birthYear = 1983;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge /10);
var yearRemainder = myAge - decades * 10;
var birthPlace = 'Bountiful, UT';
var mom = 'Lorilee';
var dad = 'Michael';

console.log('Hi! My name is ' + myName + '.');
console.log('By the end of this year, I will have been around for ' + decades + ' ' + 'decades and ' + 
	yearRemainder + ' ' + 'year.');
console.log('Below is a little bit of information about me:');
console.log('My birthplace: ' + birthPlace);
console.log('My mom\'s name: ' + mom);
console.log('My dad\'s name: ' + dad);
if (myAge > 30) {console.log('Oh my, how the years have passed.')};
