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

// All done with strings. Now moving to arrow functions
