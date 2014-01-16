var myName = 'Ceenan Calzadilla';
var currentYear = '2014';
var birthYear = '1986';
var myAge = currentYear - birthYear;
var decades = Math.floor(myAge / 10);
var yearRemainder = myAge % 10;
var birthPlace = 'Tampa, FL';
var mom = 'Lauren';
var dad = 'Ricardo';
console.log('Hi my name is ' + myName);
console.log('This year I will turn ' + myAge);
console.log('I am currently ' + decades + ' decades and ' + yearRemainder + ' years old'); 
console.log('Here are my vital stats: \n' + '\tbirth place: ' + birthPlace
+ '\n\tmother\'s name: ' + mom  
+ '\n\tdad\'s name: ' + dad); 
if (myAge > 30) {console.log('Oh my, how the years have passed.')};