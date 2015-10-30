var score = 0;
alert('Please answer the following questions:');

var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');

function Q1 () {
	var birthPlace = prompt('Did I grow up on the West Coast?');

	if (birthPlace.toLowerCase() === 'yes' || birthPlace.toLowerCase() === 'y') {
		//alert('Seriously? Most people sense the East Coast immediatly.');
		ans1.className = 'incorrect';
		ans1.innerHTML = 'Seriously? Most people sense the East Coast immediatly.';
		console.log('The user answered incorrect with: ' + birthPlace);
	}
	else if (birthPlace.toLowerCase() === 'no' || birthPlace.toLowerCase() === 'n') {
		ans1.className = 'correct';
		ans1.innerHTML = 'Correct.  I couldn\'t lose the New York if I tried!' + '<br><img width="200" src="images/smartrobot.jpg">';
		// '<br><img width="300" src="' + ques[i][4] + '">';
		console.log('The user answered correct with: ' + birthPlace);
		score ++;
	} else {
		ans1.innerHTML = 'I don\'t feel like you are taking this game seriously at all.';
	}
}

Q1();

function Q2 () {
	var eyeWear = prompt('Do I wear eyeglasses?');

	if (eyeWear.toLowerCase() === 'yes' || eyeWear.toLowerCase() === 'y' || eyeWear.toLowerCase() === 'no' || eyeWear.toLowerCase() === 'n') {
		ans2.classname = 'correct';
		ans2.innerHTML = 'Correct!  Well, sort of. This was a trick question in that I do wear glasses, but only for distance.' + '<br><img width="200" src="images/angryrobot.jpg">';
		console.log('The user answered correct with: ' + eyeWear);
		score ++;
	} else {
		ans2.innerHTML = 'Why are you wasting my time?  And your\s?';
	}
}

Q2();

function Q3 () {
	var hugo = prompt('Do I have a dog?')

	if (hugo.toLowerCase() === 'no' || hugo.toLowerCase() === 'n') {
		ans3.className = 'incorrect';
		ans3.innerHTML = 'Wrong! I\m surprised you haven\t heard of him, Hugo is pretty famous.';
	}
	if (hugo.toLowerCase() === 'yes' || hugo.toLowerCase() === 'y') {
		ans3.className = 'correct';
		ans3.innerHTML = 'Yes!  Hugo is the best.' + '<br><img width="200" src="images/hallrobot.jpg">';
		console.log('The user answered correct with: ' + hugo);
		score ++;
	}
}

Q3();

var age = prompt('How old am I?')
function Q4 () {


	if (age === '39') {
		ans4.className = 'correct';
		ans4.innerHTML = 'Exactly.  Nice job.' + '<br><img width="200" src="images/humanrobot.jpg">';
		score ++;
	}
	if (age < '39') {
		ans4.className = 'incorrect';
		ans4.innerHTML = 'Thank you!  However that is incorrect.  I am 39.';
	}
	if (age > '39') {
		ans4.className = 'incorrect';
	    ans4.innerHTML = 'Slow down there buddy!  I\'m on the verge of being offended.';
	}
}

Q4();

function Q5 () {
	var tennis = prompt('Do I play tennis?')

	if (tennis.toLowerCase() === 'no' || tennis.toLowerCase() === 'n') {
		ans5.className = 'incorrect';
		ans5.innerHTML = 'Wrong! I\m no Serena, but I try.';
	}
	if (tennis.toLowerCase() === 'yes' || tennis.toLowerCase() === 'y') {
		ans5.className = 'correct';
		ans5.innerHTML = 'Correct. Note the question didn\'t ask if I was *good* at tennis.' + '<br><img width="200" src="images/turingrobot.jpg">';
	}
}

Q5();

function Q6() {
	if (age < '39' || age > '39') {
		var birthAge = prompt('You got my age wrong, but let\'s see if you can get this:  How old was I when I was born?');

		if (birthAge === '0') {
			ans6.className = 'correct';
			ans6.innerHTML = 'Nice. You\'d be surprised how many people can\'t get that one.' + '<br><img width="200" src="images/robotfeels.jpg">';
			score ++;
		} else {
			ans6.className = 'incorrect';
			ans6.innerHTML = 'Seriously? Wow.';
		}
	}
	if (age === '39') {
		var birthAge = prompt('You knew my age, but let\'s see if you know this:  How old was I when I was born?');

		if (birthAge === '0') {
			ans6.className = 'correct';
			ans6.innerHTML = 'Nice. You\'d be surprised how many people can\'t get that one.' + '<br><img width="200" src="images/robotfeels.jpg">';
			score ++;
		} else {
			ans6.className = 'incorrect';
			ans6.innerHTML = 'Seriously? Wow.';
		}
	}
}

Q6();

	alert('Congratulation! You finished with a score of ' + score);










