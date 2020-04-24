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
// const getIds = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Run code to get the ID's
//     const ids = [120, 842, 556, 613, 393];
//     console.log(ids);

//     // Resolve means that the promise returned successfully
//     // Reject means that there was an error
//     resolve(ids);
//   }, 2000);
// });

// // Continuing with the promise
// getIds
// .then(ids => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Get receipe for a specific ID
//       const receipe = {
//         id: ids[2],
//         name: 'Italian Tomato Pasta',
//         publisher: 'Jane Miller'
//       };
//       console.log(`Receipe: ${receipe.name} by ${receipe.publisher}`);
      
//       // Again, resolve this request
//       resolve(receipe);
//     }, 2000);
//   });
// })
// .then(({publisher}) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Show the related receipe
//       console.log(`Related receipe by ${publisher}: Fluffy Egg Omelette`);
//       reject('This request errored.');
//     }, 1500);
//   });
// })
// .catch(error => {
//   console.log(`There was an error: ${error}`);
// });

// Lets see async await in action for the above code
// ES5 way
const getIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    ids = [100, 200, 300, 400, 500];
    resolve(ids);
  }, 2000);
});

const getReceipe = (ids) => {
  return new Promise((resolve, reject) => {
    setTimeout((ids) => {
      // Get receipe for a specific ID
      const receipe = {
        id: ids[2],
        name: 'Italian Tomato Pasta',
        publisher: 'Jane Miller'
      };

      // Again, resolve this request
      resolve(receipe);
    }, 2000, ids);
  });
}

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout((publisher) => {
      // Show the related receipe
      reject(`Related receipe by ${publisher}: Fluffy Egg Omelette`);
    }, 2000, publisher);
  });
}

async function fetchIds() {
  // Make use of try and catch blocks to catch the errors thrown by promises
  // A rejected promise will be catched
  try {
    const ids = await getIds;
    console.log(ids);

    const receipe = await getReceipe(ids);
    console.log(receipe);

    const related = await getRelated(receipe.publisher);
    console.log(related);
  } catch(error) {
    console.log(error);
  }
}

fetchIds();

// Moving to fetching data from a real world API
// Using fetch method
const fetchApi = () => {
  fetch('https://graph.facebook.com/v6.0/me?fields=id%2Cname&access_token=EAAEjQEwfMuIBANic5412VlV15qR0TaCNM11otMZCau7aZBgANaG5CsRIgWIJFBOy1z0oXtGIe8et8CUCEUZBcnzQM2M2VJyNa2ICV9LCfr8HNZBCOdyJkv2yGGT81XZCaZAZBlGKG6YhF5iScqCDkW2nxExO8PoTImNTXEFjQG3wdkm5BCq5oVeg4csGOEsDI0ZD')
  .then(result => {
    // console.log(result);
    return result.json();
  })
  .then(jsonData => {
    console.log(jsonData);
  })
  .catch(error => console.log(error));
}

fetchApi();
