//Paul Ogden
//Assignment 1

var myName = 'Kathryn Stoddard';
var currentYear = 2014;
var birthYear = 1983;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge /10);
var yearRemainder = myAge % 10;
var birthPlace = 'Bountiful, UT';
var mom = 'Lorilee';
var dad = 'Michael';

console.log('Hi! My name is ' + myName + '.');
console.log('By the end of this year, I will have been around for ' + decades + ' ' + 'decades and ' + yearRemainder + ' ' + 'year.');
console.log('Below is a little bit of information about me:' + '\n' +
'\t My birthplace: ' + birthPlace + '\n' +
'\t My mom\'s name: ' + mom + '\n' + 
'\t My dad\'s name: ' + dad);
if (myAge > 30) {console.log('Oh my, how the years have passed.')}; 
