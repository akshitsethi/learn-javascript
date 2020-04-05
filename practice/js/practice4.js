// Objects and Functions
// Starting with, function constructors
// Example of a regular object
var john = {
  name: 'John Doe',
  yearOfBirth: 1987,
  job: 'Teacher',
  calculateAge: function() {
    console.log(2020 - this.age)
  }
}

// Creating a function constructor
// Always with a capital first character
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function() {
  //   console.log(2020 - this.yearOfBirth);
  // }
}

// Instead of adding to the constructor, it is always better to add the methods to the
// object's prototype
// One way of doing that is
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
}

// Initialize the new object
var mark = new Person('Mark', 1980, 'Professor');
mark.calculateAge();

// To check for the parent object
console.log(mark instanceof Person);

// Just for practice
console.log(typeof 'String');

// Another way of adding to prototype
// Create an object with prototype functions
var objProto = {
  calculateAge: function() {
    console.log(2020 - this.calculateAge);
  },
  sayHello: function() {
    console.log('Hola! Que tal?');
  }
}

// now create the new object
var peter = Object.create(objProto);
peter.sayHello();

// To add properties via this method goes like this
var sun = Object.create(objProto, {
  name: { value: 'Sunriser' },
  age: { value: 32 },
  job: { value: 'Programmer' }
});
console.log(sun.name);

// Moving ahead to primitives va Objects
// For primitives (string, number, boolean, undefined, null)
// a new copy is created in the memory while for objects only the reference in the 
// memory is passed
var a = 30;
var b = a;

a = 50;

// Will output 30 because a new copy has been created
console.log(b);

// For objects
var obj1 = {
  name: 'John',
  age: 32
};

var obj2 = obj1;

obj1.name = 'Mark';

// Will output "Mark" because for objects, only reference to the object in the memory is passed
console.log(obj2.name);

// Same logic applies to functions for both primitives and objects
function change(a, b) {
  age = a;
  obj1.name = b;
}

change(100, 'Steve');
console.log(b);
console.log(obj2.name);

// First class functions
// Functions within functions
var arr1 = ['designer', 'teacher', 'programmer', 'designer', 'entrepreneur'];
var arr2 = [1980, 1987, 1943, 1969, 2000];

// Here, first param passes is the array
// and the second one is the function
var example1 = function(arr, fn) {
  var newArr = [];

  if (arr.length > 0) {
    arr.forEach(function(element) {
      newArr.push(fn(element));
    });
  }

  console.log(newArr);
}

var func1 = function(el) {
  switch (el) {
    case 'designer':
      return 'What is the new design you are working on?';
    case 'teacher':
      return 'Which topic are you going to teach today?';
    case 'programmer':
      return 'How many bugs have you fixed today?';
    default:
      return 'What the fuck are you working on today';
  }
}

var func2 = function(el) {
  return 2020 - el;
}

example1(arr1, func1);
example1(arr2, func2);

// Return function with function
var example2 = function(el) {
  switch (el) {
    case 'designer':
      return function(name) {
        console.log(name + ', what is the new design you are working on?');
      }
    case 'teacher':
      return function(name) {
        console.log(name + ', which topic are you going to teach today?');
      }
    case 'programmer':
      return function(name) {
        console.log(name + ', how many bugs have you fixed today?');
      }
    default:
      return function(name) {
        console.log(name + ', what the fuck are you working on today?');
      }
  }
}

// One of calling it is
var call1 = example2('programmer');
call1('Akshit');

// Another way of calling the function
example2('designer')('Akshit');
example2('entrepreneur')('Akshit');

// Immediately invoked function expression IIFE
(function() {
  console.log('Example of IIFE.');
})();

// Example of IIFE with function params
(function(name) {
  console.log('Hola ' + name + ', how are you doing today?');
})('Akshit');

// Now, moving to Closures
// Re-writing the existing function to demonstrate the example of a closure
// Closure means that a function has access to the variables of the outer function even
// after the outer function has returned and it's execution context is gone.
var exClosure = function(job) {
  return function(name) {
    switch (job) {
      case 'designer':
        console.log(name + ', what is the new design you are working on?');
        break;
      case 'teacher':
        console.log(name + ', which topic are you going to teach today?');
        break;
      case 'programmer':
        console.log(name + ', how many bugs have you fixed today?');
        break;
      default:
        console.log(name + ', what the fuck are you working on today?');
    }
  }
}

exClosure('entrepreneur')('Akshit');

// bind, call, and apply methods
// Let's start with the call method. As an example, we have two objects
var john = {
  name: 'John',
  yearOfBirth: 1987,
  job: 'Professor',
  calculateAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
}

// Another object
var emily = {
  name: 'Emily',
  yearOfBirth: 1990,
  job: 'Model'
}

// As visible, second object does not have the calculate method but we can call the
// method from the first object to the second one
// This outputs the age for the emily object
// john.calculateAge.call(emily);

// Similarly, bind method is similar to the call method. As, the name suggests it adds the
// method to the second object instead of calling it
// john.calculateAge.bind(emily);

// Similarly, apply method is also same as the call method. The main difference comes 
// when passing arguements to the method. Args are passed individually in the call method
// wheres for the apply method, they passed as an array.
// Examples
var mark = {
  calculateAge: function(yearOfBirth, logger) {
    if (logger) {
      console.log(2020 - yearOfBirth);
    }
  }
}

// Now for the call method, we do it something like
// mark.calculateAge.call(emily, 1990);

// Whereas for the apply method, it should be an array
mark.calculateAge.bind(emily)(1990, true);

// Need to spend more time understanding this. Can be done by solving more problem sets
// Coding Challenge: Basic & Expert both in one solution
(function() {
  var score = 0;
  var Question = function(question, options, solution) {
    this.question = question;
    this.options = options;
    this.solution = solution;
  }

  // Create few questions
  var ques1 = new Question(
    'How hard it is to learn JavaScript?',
    ['Not easy', 'Normal', 'Difficult', 'Needs perfection'],
    3
  );

  var ques2 = new Question(
    'When is the new season of Friends coming?',
    ['January 2021', 'May 2020', 'March 2022', 'Never'],
    1
  );

  var ques3 = new Question(
    'Who is the hottest Instagram model?',
    ['Jacqueline Fernandez', 'Sapna Pabbi', 'Mithali Palekar', 'Mouni Roy'],
    0
  );

  var questions = [ques1, ques2, ques3];

  var getQuestion = function() {
    var random = Math.floor(Math.random() * 3);
    var selectedQuestion = questions[random];

    console.log(selectedQuestion.question);

    // Loop over the options
    for (var i = 0; i < selectedQuestion.options.length; i++) {
      console.log(i + ': ' + selectedQuestion.options[i]);
    }

    // For prompt and processing the answer
    questions[random].processAnswer();
  }

  Question.prototype.processAnswer = function() {
    // Show the prompt
    var answer = prompt('Enter your answer in this prompt!');

    // If exit, then don't do anything further
    if (answer) {
      if (answer !== 'exit') {
        // Now, check for solution
        if (Number(answer) === this.solution) {
          this.processScore(true);
        } else {
          this.processScore(false);
        }
      }
    } else {
      // Show the next question
      getQuestion();
    }
  }

  Question.prototype.processScore = function(status) {
    if (status) {
      // Increment the score
      ++score;

      // Show the message in the console.
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer :(');
    }

    console.log('-------------------');
    console.log('Your score is ' + score);
    console.log('-------------------');

    // Show the next question
    getQuestion();
  }

  getQuestion();
})();
