var score = 0;
alert('Please answer the following questions:');
var birthPlace = prompt('Did I grow up on the West Coast?');

if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y') {
	alert('Seriously? Most people sense the East Coast immediatly.');
	console.log('The user answered incorrect with: ' + birthPlace);
} 
if (birthPlace.toLowerCase() === 'no' || birthPlace.toLowerCase() === 'n') {
	alert('Correct.  I couldn\'t lose the New York if I tried!');
	console.log('The user answered correct with: ' + birthPlace);
	score ++;
} else {
	alert('I don\'t feel like you are taking this game seriously at all.');
}

var eyeWear = prompt('Do I wear eyeglasses?')

if (eyeWear.toLowerCase() === 'yes' || eyeWear.toLowerCase() === 'y' || eyeWear.toLowerCase() === 'no' || eyeWear.toLowerCase() === 'n') {
	alert('Correct!  Well, sort of. This was a trick question in that I do wear glasses, but only for distance.');
	console.log('The user answered correct with: ' + eyeWear);
	score ++;
} else {
	alert('Why are you wasting my time?  And your\s?');
}
var hugo = prompt('Do I have a dog?')

if (hugo.toLowerCase() === 'no' || birthPlace.toLowerCase() === 'n') {
	alert('Wrong! I\m surprised you haven\t heard of him, Hugo is pretty famous.');
}
if (hugo.toLowerCase() === 'yes' || hugo.toLowerCase() === 'y') {
	alert('Yes!  Hugo is the best.');
	console.log('The user answered correct with: ' + hugo);
	score ++;
}
var age = prompt('How old am I?')

if (age === 39) {
	alert('Exactly.  Nice job.');
	score ++;
}
if (age < 39) {
	alert('Thank you!  However that is incorrect.  I am 39.');
}
if (age > 39) {
    alert('Slow down there buddy!  I\'m on the verge of being offended.');
}
var tennis = prompt('Do I play tennis?')

if (tennis.toLowerCase() === 'no' || tennis.toLowerCase() === 'n') {
	alert('Wrong! I\m no Serena, but I try.');
}
if (tennis.toLowerCase() === 'yes' || tennis.toLowerCase() === 'y') {
	alert('Correct. Note the question didn\'t ask if I was *good* at tennis.');
}
if (age < 39 || age > 39) {
	var birthAge = prompt('You got my age wrong, but let\'s see if you can get this:
		How old was I when I was born?');
	if (birthAge === 0) {
	alert('Nice. You\'d be surprised how many people can\'t get that one.');
	score ++;
	} else {
	alert('Seriously? Wow.');
	}
if (age === 39) {
var birthAge = prompt('You knew my age, but let\'s see if you know this:
    	 How old was I when I was born?');
	if (birthAge === 0) {
	alert('Nice. You\'d be surprised how many people can\'t get that one.');
	score ++;
	}
	if (birthAge < 0) {
	alert('Seriously? Wow.');
	}
}


	alert('Congratulation! You finished with a score of ' + score);










