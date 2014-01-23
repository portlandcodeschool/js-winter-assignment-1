//sandra golden
//js-winter-assignment-1

var myName = 'sandra golden';
var currentYear = 2014;
var birthYear = 1922;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = 'Greenbow, AL';
var mom = 'Emmylou';
var dad = 'BillyBob';

console.log('Hi! This is ' + myName + ' reporting for homework assignment #1.');
console.log('According to this homework assignment, I will be ' + myAge + ' years old this year.');
console.log('This means that I am a whopping ' + decades + ' decades and ' + yearRemainder + ' year(s) old.');
console.log('Here are my vital stats: \n' + 
				'\tBirthplace: ' + birthPlace + '\n' +
				'\tMother\'s Name: ' + mom + '\n' +
				'\tFather\'s Name: ' + dad);

if (myAge > 30) {console.log('Oh my, how the years have passed.')};