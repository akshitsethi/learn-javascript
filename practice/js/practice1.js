var x;

console.log(typeof 'String');
console.log(typeof 30);
console.log(typeof false);
console.log(typeof x);

// Console messages
console.info('Info message');
console.log('Normal logging');
console.warn('Warning message');
console.error('Error message');

// Custom designed console message
console.log('%cCustom styled message', 'color:#0b0b0b;background:#eeeeee');

// If / else statements
var count = 11;

if (count > 10 && count < 20) {
  console.log('Average score');
} else if (count > 20) {
  console.log('Good score');
} else if (count < 10) {
  console.log('Poor score');
} else {
  console.log('This should never come true for the current scenario');
}

// Switch statements
switch (true) {
  case count > 10 && count < 20:
    console.log('Average score');
    break;
  case count > 20:
    console.log('Good score');
    break;
  case count < 10:
    console.log('Poor score');
    break;
  default:
    console.log('This should never return true for the current scenario');
}

// Another example for switch statements
var job = 'programmer';

switch (job) {
  case 'engineer':
    console.log('I write amazing code');
    break;
  case 'entrepreneur':
    console.log('I find solutions to problems');
    break;
  case 'teacher':
    console.log('I teach code to students');
    break;
  default:
    console.log('I am just a regular guy out there');
}

// Checking for existence of the variables
var word = '';
var number = 0;

if (number) {
  console.log('Number does exist');
} else {
  console.error('Number does NOT exist');
}

// Same for word
if (word) {
  console.log('Word does exist and is true.');
} else {
  console.error('Word does NOT exist and returns false');
}

// Teranory operators
var age = 20;
age >= 18 ? console.log('Person is eligible to vote') : console.log('Too young to vote');

// Coding challenge no.2
var scoreRock = (89 + 120 + 90) / 3;
var scoreMark = (54 + 109 + 99) / 3;
var scoreJohn = (76 + 134 + 48) / 3;

if (scoreJohn > scoreMark && scoreJohn > scoreRock) {
  console.log('John has the best average out of the 3 players');
} else if (scoreMark > scoreJohn && scoreMark > scoreRock) {
  console.log('Mark has the best average out of the 3 players');
} else {
  console.log('Rock has the best average out of the 3 players');
}
