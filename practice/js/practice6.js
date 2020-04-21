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
