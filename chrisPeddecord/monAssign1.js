var myName = 'Christopher Peddecord',
	currentYear = 2014,
	birthYear = 1982,
	myAge = '3' + '2',
	decades = Math.floor(myAge / 10),
	yearRemainder = myAge % 10,
	birthPlace = 'Sacramento, CA',
	mom = 'Merlina',
	dad = 'Gary';

console.log('Hello, my name is ' + myName);
console.log('I will eventually become ' + myAge);
console.log('I have ' + decades + ' decades and will eventually have ' + yearRemainder + ' years under my belt');
console.log('True facts about ' + myName + ':\n\tBorn -- ' + birthYear + '\n\tMother\'s Name -- ' + mom + '\n\tDad\'s Name -- ' + dad);

if (myAge > 30) {console.log('Oh my, I\'m young, damn you!')};