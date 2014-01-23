var myName = "James Stiehl";
var currentYear = 2014;
var birthYear = 1977;
var myAge = currentYear - birthYear;
var decades =Math.floor(myAge/10);
var yearRemainder = myAge%10;
var birthPlace = "Big Spring, TX";
var mom = "Carlota";
var dad = "Fred";

console.log("My name is "+ myName);
console.log("This year I will be turning " + myAge + " years old");
console.log("I am "+decades+" decades and "+yearRemainder+" years old!");
console.log("Here are my vital stats\n\t"+"Birth Place: "+birthPlace+"\n\t"+"Mom's name: " + mom+"\n\tDad's Name: "+dad);

if (myAge > 30) {
	console.log('Oh my, how the years have passed.');
}

