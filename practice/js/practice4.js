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
