// Asynchronous Javascript
// Mocking API calls using the setTimeout
// ES5 version
function callback() {
  setTimeout(() => {
    // Run code to get the ID's
    const ids = [120, 842, 556, 613, 393];
    console.log(ids);

    // now we have the IDS, fetch the receipe for a specific id
    setTimeout((ids) => {
      // Get receipe for a specific ID
      const receipe = {
        id: ids[2],
        name: 'Italian Tomato Pasta',
        publisher: 'Jane Miller'
      };
      console.log(`Receipe: ${receipe.name} by ${receipe.publisher}`);

      // Mock another API call to fetch related receipe for the publisher
      setTimeout((publisher) => {
        // Show the related receipe
        console.log(`Related receipe by ${publisher}: Fluffy Egg Omelette`);
      }, 1500, receipe.publisher);
    }, 2000, ids);
  }, 1500);
}

// callback();

// Using Promises in ES6
const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Run code to get the ID's
    const ids = [120, 842, 556, 613, 393];
    console.log(ids);

    // Resolve means that the promise returned successfully
    // Reject means that there was an error
    resolve(ids);
  }, 2000);
});

// Continuing with the promise
getIds
.then(ids => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get receipe for a specific ID
      const receipe = {
        id: ids[2],
        name: 'Italian Tomato Pasta',
        publisher: 'Jane Miller'
      };
      console.log(`Receipe: ${receipe.name} by ${receipe.publisher}`);
      
      // Again, resolve this request
      resolve(receipe);
    }, 2000);
  });
})
.then(({publisher}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Show the related receipe
      console.log(`Related receipe by ${publisher}: Fluffy Egg Omelette`);
      reject('This request errored.');
    }, 1500);
  });
})
.catch(error => {
  console.log(`There was an error: ${error}`);
});
