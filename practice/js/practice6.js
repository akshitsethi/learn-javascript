// Starting with let and const
// Unlike var, let and const are block scoped as well (they are function scoped too)
// while var is function scoped
// Various examples to practice and understand it correctly

// firstly, with var
function a() {
  var one = 'Something';

  // checking for block scoped for var
  if (true) {
    var two = 'Another';
  }

  console.log(one);

  // We can access var outside the block as well
  console.log(two);
}

a();

// This will throw error, since var is function scoped and thus accessing it
// outside the function will throw an error
// console.log(one);

// Now moving to the example of block scoping for let and const
function b() {
  let one = 'Let function scoped';

  // Example of block scoping
  if (true) {
    let one = 'Let block scoped';

    console.log(one);
  }

  // This will be the one defined in the starting of the function
  console.log(one);
}

b();

// For const, the only difference of it from let is that its value cannot be
// changed later on during the course of the application

// Now, moving on to the string functions
// One is template literals
let sum1, sum2;

sum1 = 30;
sum2 = 20;

var joinStrings = sum1 + ' is greater than ' + sum2;
let literals = `${sum1} is greater than ${sum2}`;

// As can be seen, the second method of joining strings is better than 
// the previous method of joining string and variables

// We can also execute functions inside template literals
function name() {
  return 'Akshit Sethi';
}

console.log(`My name is ${name()}`);

// Random stuff (displaying a custom styled message)
console.log('%cThis is a custom styled message', 'color:pink;font-weight:bold');


// Moving to string functions
let name1 = 'Akshit Sethi';

// Important functions for string
console.log(name1.charAt(1));
console.log(name1.startsWith('v'));
console.log(name1.endsWith('thi'));
console.log(name1.includes('shit'));

// Small but important topic
// About IIFE and blocks
// In ES5, for code privacy, we use the IIFE to isolate the code from the rest
// of the code. Something like below
(function() {
  var a = 'Something';
  var b = 'Another variable';

  function ab() {
    return 'Dummy function';
  }
})();

// In ES6, we can use blocks to achieve the same thing.
// Example
{
  var a = 'Something';
  var b = 'Another variable';

  function ab() {
    return 'Dummy function';
  }
}

// All done with strings. Now moving to arrow functions
// First example
var arrow1 = (param1) => {
  console.log(param1);
}

// foreach function using the arrow function
var arr1 = [10, 20, 30, 40, 50, 60];
arr1.forEach((el, index, arr) => arr[index] = el * 2);

console.log(arr1);

// Lexical this keyword in arrow functions
// First example
var abc = {
  name: 'Rachael Green',
  age: 28,
  city: 'New York',
  calculateAge: function() {
    // Workaround for lexical `this` keyword
    var self = this;

    return function() {
      return new Date().getFullYear() - self.age;
    }
  }
}

// This will get undefined because the lexical `this` keyword is not binded
// It is only binded in ES5 when the function is called directly by the object
// which is not the case over here.
console.log(abc.calculateAge()());

// Now, doing the same example in ES6
var abc1 = {
  name: 'Rachael Green',
  age: 28,
  city: 'New York',
  calculateAge: function() {
    return () => {
      return new Date().getFullYear() - this.age;
    }
  }
}
console.log(abc1.calculateAge()());

// Example of creating arrays from nodelist
// ES5 example
var nodes = document.querySelectorAll('.example');

// Converts to array
var nodesArr = Array.prototype.slice.call(nodes);

// ES6 example
var nodesArr = Array.from(nodes);

// Now, moving on to a small topic such as destructuring
// and it with another one, which is the spread operator
var exArr1 = ['Akshit Sethi', 1987, 32, 'New Delhi'];

// Now, to destructure this array, all I have to do is
const [asname, asdob, asage, ascity] = exArr1;
// And console log it
console.log(asname, asdob, asage, ascity);

// Similary for objects
// One thing to take care of is that the object keys should be matched when
// destructuring the object
const obj1 = {
  name: 'Akshit Sethi',
  age: 32,
  city: 'New York'
}

var {name, age, city} = obj1;
console.log(name, age, city);

// To use own names instead of the keys, we can do something like below
var {name: bbname, age: myage, city: ccc1} = obj1;
console.log(bbname, myage, ccc1);

// That's all about destructuring
// Moving on to the spread operator
// Spread operator means to use  ... instead of defining the complete items
// An example
var arr4 = [10, 20, 30, 40, 50, 60];

function sum(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

// We can call the above function using the spread operator as arguement
console.log(sum(...arr4));

// Spread operator can be also be used to combine arrays
var arr5 = ['Jane', 'Maria', 'Ester', 'Danna'];
var arr6 = [...arr4, 'Girls', ...arr5];

console.log(arr6);

// Similar to spread operator, another handy one is the rest operator
// Before that, let's see the arguements keywords provided by JS
// Also, see how it's done in ES5
var args5 = function(limit) {
  console.log(arguments);

  // Set var to 0
  let sum = 0;

  // Convert object to array
  // To skip one variable from the arguments list, we can do something like below
  // Define the starting index
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(element, index, arr) {
    sum += element;
  });

  console.log(sum);
}

// Now, in ES6
// Using shorthand function just to practice it more
// In ES6, it as simple as defining it in the paramters
var args6 = (limit, ...years) => {
  years.forEach(element => {
    console.log(element);
  });

  // Log the limit variable
  console.log(limit);
}

args5('Akshit', 10, 20, 30, 40, 50);
args6('Fuck limit', 10, 20, 30, 40, 50);

// Next one is default parameters
// In ES5
function default5(name, age) {
  name = name || 'Akshit Sethi';
  age = age || 32;

  console.log(name, age);
}

// ES6
function default6(name = 'Akshit Sethi', age = 32) {
  console.log(name, age);
}

default5('Jacob Smith');
default6();

// Before I move forget again, here is the for of loop example
var arr10 = ['Jane', 'Nicolette', 'Kendra', 'Fiamurr'];

for (let element of arr10) {
  console.log(element);
}

// Another example of for of loop with destructuring
var arr11 = [10, 20, 30];
var arr12 = {
  name: 'Akshit Sethi',
  age: 32
}

// Maps
// Important datatype introduced in ES6
var questions = new Map();

// It is set with a key and value
// Unlike objects, keys can be any data type whereas in objects it can only
// be a string
questions.set('question', 'Which is the hottest celebrity on Instagram?');

// Now, setting a key with an integer
questions.set(1, 'Sapna Pabbi');
questions.set(2, 'Jacqueline Fernandes');
questions.set(3, 'Urvashi Rautela');
questions.set(4, 'Sherlyn Chopra');

// Setting a key with a boolean
questions.set(true, 'That\'s a correct answer :)');
questions.set(false, 'Wrong answer!');

// Correct answer
questions.set('correct', 2);

// Now, moving to the get part of Maps
console.log(questions.get('question'));

// We can also loop over the Maps
// .enteries() is to fetch all the key value pairs
for (let [key, value] of questions.entries()) {
  if (typeof key === 'number') {
    console.log(key, value);
  }
}

// Ask for the correct answer using the prompt box
// var ansme = parseInt(prompt('Please type your answer here.'));

// Check for the solution and display the correct response
// console.log(questions.get(ansme === questions.get('correct')));

// To clear values of the map, we can simply use the clear method
questions.clear();
console.log(questions);

// The final topic in the section is the classes and subclasses
// Let's start with defining classes the old way using the function contructor
// and then adding methods to the prototype chain of the function object
var Person = function(name, dob, city, profession) {
  this.name = name;
  this.dob = dob;
  this.city = city;
  this.profession = profession;
}

// Let's add a method to it's prototype chain
Person.prototype.calculateRetirement = function() {
  age = new Date().getFullYear() - this.dob;
  return 60 - age;
}

// Now make an athlete class which extends the Person class
var Athlete = function(name, dob, city, profession, competitions, medals) {
  Person.call(this, name, dob, city, profession);
  this.competitions = competitions;
  this.medals = medals;
}

// So, now the athlete object also includes or extends the Person object
// Let's extend the prototype object for the athlete class as well
Athlete.prototype = Object.create(Person.prototype);

// Now, let's add a method to the athlete prototype
Athlete.prototype.addMedal = function() {
  return ++this.medals;
}

// And testing this out
var test1 = new Athlete('John Doe', 1987, 'New York', 'Entrepreneur', 4, 10);
console.log(test1);
console.log(test1.calculateRetirement());

test1.addMedal();
test1.addMedal();

// Now, how it is done in ES6 is shown with the help of an example
class Person6 {
  constructor(name, dob, city, profession) {
    this.name = name;
    this.dob = dob;
    this.city = city;
    this.profession = profession;
  }

  // Adding a method in a class is quite simple
  calculateRetirement() {
    age = new Date.getFullYear() - this.dob;
    return 60 - age;
  }
}

// Now, to make a class extend another class is as simple as this
class Athlete6 extends Person6 {
  constructor(name, dob, city, profession, competitions, medals) {
    super(name, dob, city, profession);

    this.competitions = competitions;
    this.medals = medals;
  }

  // Now, we can add a method to this subclass which will be available
  // just to this class and not the parent class
  // But the parent class methods will be available to this class as well
  addMedal() {
    ++this.medals;
  }
}

var anotherTest = new Athlete('Akshit Sethi', 1987, 'New Delhi', 'Entrepreneur', 4, 10);
console.log(anotherTest);

// Add medal
anotherTest.addMedal();

// Calculate retirement
console.log(anotherTest.calculateRetirement());
