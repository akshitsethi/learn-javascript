// Hositing and scope chain
var a = 'Hello';
first();

function first() {
  var b = 'Hi';
  second();

  function second() {
    var c = 'Fuck';
    // third();
  }
}

// this is going to throw error now since it does not have access to the
// b and c variables since this function is declared in the global context
// and only has access to the variables a and d
function third() {
  var d = 'Akshit';
  console.log(a + b + c + d);
}

// So, for this keyword
// For a function call, this keyword will always refer to the window object.
// For example
function firstOne() {
  console.log(this); // will be window object
  second();

  function second() {
    console.log(this); // will still be window object and so on..
  }
}

firstOne();

// For the object method call, this keyword will always refer to the current object
// so, for example
var john = {
  name: 'John Doe',
  age: 32,
  calculateAge: function() {
    console.log(this); // will return the john object

    // but a regular function call inside this object method call
    // will return the regular window object
    // for example
    function inner() {
      console.log(this); // will return the window object
    }

    inner();
  }
}

john.calculateAge();

// Another interesting thing to note is that when one object borrows the 
// method of another object, call to this in the method will return their
// respective objects instead of the same object whose method was borrowed
// for example, we already have john object in place.. let's create another object..
var mike = {
  name: 'Mike Tofu',
  age: 90
}

mike.calculateAge = john.calculateAge;
mike.calculateAge(); // this keyword will return the mike object instead of john object

// and the inner() function will still return the global window object for the mike
// function call as well
