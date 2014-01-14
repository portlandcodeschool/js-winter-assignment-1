var myName = 'Jhenna Voorhis';
var currentYear = 2014;
var birthYear = 1990;
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = 'Marin';
var mom = 'Tara';
var dad = 'Chas';
console.log('Hello, my name is ' + myName + ' and it a pleasure to meet you.');
console.log('This year I will turn ' + myAge + ' years old!');
console.log('In other words I am ' + decades + ' decades, and ' 
	+ yearRemainder + ' year(s) old.');
console.log('Here are my vital stats: \n\tbirthplace: ' + birthPlace 
	+ '\n\tmothers name: ' + mom 
	+ '\n\tfathers name: ' + dad);
if (myAge > 30) {console.log('Oh my, how the years have passed.')};