/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

// Going to be coding this in ES6
class Entry {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

// Park subclass
class Park extends Entry {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);

    this.trees = trees;
    this.area = area;
  }

  // Park age
  calculateAge = () => {
    return new Date().getFullYear() - this.buildYear;
  }

  // Tree density
  treeDensity = () => {
    return (this.trees / this.area).toFixed(2);
  }
}

// Street subclass
class Street extends Entry {
  constructor(name, buildYear, length, size = 'Normal') {
    super(name, buildYear);

    this.length = length;
    this.size = size;
  }
}

// Start adding data
var park1 = new Park('Park 1', 1956, 848, 690);
var park2 = new Park('Park 2', 1877, 2100, 1784);
var park3 = new Park('Park 3', 1902, 990, 351);

var street1 = new Street('Street 1', 1919, 1534, 'Big');
var street2 = new Street('Street 2', 1871, 876, 'Small');
var street3 = new Street('Street 3', 1922, 448, 'Tiny');
var street4 = new Street('Street 4', 1956, 642);

// Put them all in an town object
let town = {
  parks: [park1, park2, park3],
  streets: [street1, street2, street3, street4]
}

// Start with the reporting
const {parks, streets} = town;


console.log('----------- REPORT -----------');

// 1. Calculate tree density of each park
for (let park of parks) {
  console.log(`1. Tree density for ${park.name} is ${park.treeDensity()}`);
}

// 2. Average age of each town's park
let totalAge = 0;

for (let park of parks) {
  totalAge += park.calculateAge();
}
console.log(`2. Average age of each town's park is ${(totalAge / parks.length).toFixed(2)}`);

// 3. Name of the park that has more than 1000 trees
for (let {name, trees} of parks ) {
  if (trees > 1000) {
    console.log(`3. ${name} has more than 1000 trees`);
  }
}

// 4. Total and average length of the town's streets
let totalLength = 0;

for (let {length} of streets) {
  totalLength += length;
}

console.log(`4. Total length of streets is ${totalLength} and average length is ${totalLength / streets.length}`);

// 5. Size classification of all streets
for (let {name, size} of streets) {
  console.log(`5. ${name} has a size classification of ${size}`);
}

console.log('------------------------------');
