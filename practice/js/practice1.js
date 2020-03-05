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

// Coding challenge #2
var scoreJohn = (89 + 120 + 90) / 3;
var scoreMark = (54 + 109 + 99) / 3;
var scoreRock = (76 + 134 + 48) / 3;

if (scoreJohn > scoreMark && scoreJohn > scoreRock) {
  console.log('John has the best average out of the 3 players');
} else if (scoreMark > scoreJohn && scoreMark > scoreRock) {
  console.log('Mark has the best average out of the 3 players');
} else if (scoreRock > scoreJohn && scoreRock > scoreMark) {
  console.log('Rock has the best average out of the 3 players');
} else {
  console.log('None of the players is better than each other');
}

// Moving to functions
// Random test
console.log('%cThis is my custom styled message', 'background:red;color:#ffffff;');

function calculateAge(birthYear) {
  const date = new Date().getFullYear();
  return date - birthYear;
}

console.log('I am ' + calculateAge(1987) + ' years old.');

function isRetired(birthYear, ageOfRetirement) {
  const age = calculateAge(birthYear);
  const yearsToRetire = ageOfRetirement - age;

  if (yearsToRetire > 0) {
    console.log('The person will be retired from work in ' + yearsToRetire + ' years');
  } else {
    console.log('The person is already retired from work');
  }
}

isRetired(1987, 35);

// Function expressions
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'programmer':
      console.log(firstName + ' writes excellent piece of code.');
      break;
    case 'teacher':
      console.log(firstName + ' teaches kids how to code');
      break;
    case 'driver':
      console.log(firstName + ' drives a cab in New Delhi');
      break;
    case 'designer':
      console.log(firstName + ' designs beautiful websites for the company');
      break;
    default:
      console.log(firstName + ' is into something else');
  }
}

whatDoYouDo('programmer', 'Akshit');
whatDoYouDo('teacher', 'John');
whatDoYouDo('driver', 'Mark');
whatDoYouDo('designer', 'Rock');

// JS data types
// String, Number, Boolean, Undefined, null

// Moving on to Arrays
var names = ['John', 'Mark', 'Rock', 'Stone', 'Akshit'];
var ages = new Array(1972, 1964, 1981, 1959, 1987);

// Trying to know the edge cases for JS
var name = 'Akshit Sethi';
var num = 3002;
var bool = false;
var xy;

// On a string it tells the number of characters
console.log(name.length);

// Returns undefined on a number
console.log(num.length);

// This will throw an error in the console
// Uncaught TypeError: Cannot read property 'length' of undefined
// same for null datatype
// console.log(xy.length);

// Returns undefined for a boolean
console.log(bool.length);

// Returns the number of elements for an array
console.log(names.length);

let yz = null;
console.log(typeof yz);

// Continue learning arrays
var akshit = ['Akshit', 'Sethi', 1987, 'Entrepreneur', false];
akshit.push('Net worth is $100M'); // Adds to the end of the array
akshit.unshift('Mr.'); // Adds to the beginning of the array

akshit.pop(); // Removes from the end of the array
akshit.shift(); // Removes from the beginning of the array
console.log(akshit);

// Check the index value of an array item
console.log(akshit.indexOf(1987));
console.log(akshit.indexOf('Engineer')); // -1 will be returned if the value does not exist in the array

// Coding challenge #3

var tipCalculator = function(billAmount) {
  switch (true) {
    case billAmount < 50:
      return (billAmount * 20) / 100;
    case billAmount >=50 && billAmount < 200:
      return (billAmount * 15) / 100;
    case billAmount >=200:
      return (billAmount * 10) / 100;
  }
}

const bills = [124, 89, 42, 237];

// Mutate an array
bills[2] = 98;

console.log(tipCalculator(bills[0]));
console.log(tipCalculator(bills[1]));
console.log(tipCalculator(bills[2]));
console.log(tipCalculator(bills[3]));

// NOW: Objects
// Object literal
var akshit = {
  firstName: 'Akshit',
  lastName: 'Sethi',
  description: 'Programmer & Entrepreneur by passion. Addicted to coding and spanish',
  birthYear: 1987,
  isMarried: false,
  hometown: 'Delhi',
  favouriteCity: 'Mumbai',
  numberOfMillions: 100,
  calculateAge: function() {
    const date = new Date().getFullYear();
    this.age = date - this.birthYear;
  }
}

akshit.calculateAge();
console.log(akshit);

// Calling object properties
console.log(akshit.firstName);

// another way is to call them just like arrays
console.log(akshit['lastName']);

// moving on to loops
// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// another array
var akshit = new Array(200, 300, 400, 500, 600, 700);

// another for loop example
for (var i = 0; i < akshit.length; i++) {
  console.log(akshit[i]);
}

// re-creating the above example using while loop
var i = 0;
while (i < akshit.length) {
  console.log(akshit[i]);
  i++;
}

// moving on to continue and break statements
// print only for number 500
for (var i = 0; i < akshit.length; i++) {
  if (akshit[i] === 500) console.log('500 is my lucky number.');
  continue;
}

// break if the number 500 is there in the loop
for (var i = 0; i < akshit.length; i++) {
  if (akshit[i] === 500) break;
  console.log(akshit[i]);
}

// reverse loop
for (var i = akshit.length - 1; i >= 0; i--) {
  console.log(akshit[i]);
}

// Coding challenge #4
let challenge = {
  bills: [224, 498, 104, 55, 90, 347, 220, 86],
  tips: [],
  totals: [],
  calculateTip: function() {
    for (var i = 0; i < this.bills.length; i++) {
      let tip;

      switch(true) {
        case this.bills[i] < 75:
          tip = (this.bills[i] * 20) / 100;
          break;
        case this.bills[i] >= 75 && this.bills[i] < 250:
          tip = (this.bills[i] * 15) / 100;
          break;
        case this.bills[i] >= 250 :
          tip = (this.bills[i] * 10) / 100;
          break;
      }

      this.tips.push(tip);
      this.totals.push(this.bills[i] + tip);
    }
  },
  calculateAverage: function() {
    let total = 0;

    for (var i = 0; i < this.bills.length; i++) {
      total = total + this.bills[i];
    }

    this.totalBill = total;
    this.averageBill = total / this.bills.length;
  }
}

challenge.calculateTip();
challenge.calculateAverage();
console.log(challenge.tips);
console.log(challenge.totals);
console.log(challenge.totalBill);
console.log(challenge.averageBill);
