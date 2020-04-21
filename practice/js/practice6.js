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

