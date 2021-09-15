--------------------------------------------------
Print
console.log(5);
console.log(25);
--------------------------------------------------
Comments
// Opening line
console.log('It was love at first sight.');
/* 
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/
--------------------------------------------------
Data types
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);
--------------------------------------------------
Arithmetic Operators
console.log(34 + 3.5);
console.log(2021 - 1969);
console.log(65/240);
console.log(0.2708*100);
--------------------------------------------------
String Concatenation
console.log('Hello' + 'World');
console.log('Hello ' + 'World');
--------------------------------------------------
Properties
console.log('Teaching the world how to code'.length);
--------------------------------------------------
Method
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy');

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ');
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());
--------------------------------------------------
Built-in Objects
console.log(/*Math.floor*/(Math.random()*100));
console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
--------------------------------------------------
If Statement
let sale = true;
sale = false
if (sale) {
  console.log('Time to buy!')
};
--------------------------------------------------
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {console.log('Time to wait for a sale.');}
--------------------------------------------------
Comparison Operator
let hungerLevel = 7
if (hungerLevel > 7) {console.log('Time to eat!');} else {console.log('We can eat later!');}
console.log((typeof hungerLevel).length)
--------------------------------------------------
Logical Operator
let mood = 'sleepy';
let tirednessLevel = 6;
if (((mood === 'sleepy') && !(tirednessLevel > 8))) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
--------------------------------------------------
Truthy and Falsy
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
--------------------------------------------------
Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil  = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
--------------------------------------------------
Ternary Operator
let isLocked = false;

isLocked ? 
  console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")
--------------------------------------------------
Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}else {
  console.log('Invalid season.');
}
--------------------------------------------------
The switch keyword
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
case 'first place':
  console.log('You get the gold medal!');
  break; 
case 'second place':
  console.log('You get the silver medal!');
  break;
case 'third place':
  console.log('You get the bronze medal!');
  break;
default:
  console.log('No medal awarded.');
  break;
}
--------------------------------------------------
Function Decleration
function getReminder() {
  console.log('Water the plants.');
}
function greetInSpanish() {
  console.log('Buenas Tardes.')
}
--------------------------------------------------
Calling a Function
function sayThanks() {
 console.log('Thank you for your purchase! We appreciate your business.') 
}
sayThanks()
sayThanks()
sayThanks()
--------------------------------------------------
Parameters and Arguments
function sayThanks(name) {
  console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}
sayThanks('Cole')
--------------------------------------------------
Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
--------------------------------------------------
Return
function monitorCount(rows, columns) {
  if (rows <=0 || columns <=0) {
    return 'rows and columns must be a real number >=1'
  }else {
   return (rows * columns)
  }
}
const numOfMonitors = monitorCount(4, 5)
console.log(numOfMonitors)
--------------------------------------------------
Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return (monitorCount(rows, columns) * 200);
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
--------------------------------------------------
Function Expressions
const plantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true
  }else {
    return false
  };
}

console.log(plantNeedsWater('Tuesday'))
--------------------------------------------------
Arrow Functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
--------------------------------------------------
Concise Body Arrow Functions 
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
--------------------------------------------------
Scope
Blocks and Scope
const city = 'New York City';
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
--------------------------------------------------
Global Scope
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())
--------------------------------------------------
Block Scope
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};
logVisibleLightWaves()
console.log(lightWaves)
--------------------------------------------------
Scope Pollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)
--------------------------------------------------
Practice Good Scoping
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
--------------------------------------------------
Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);
--------------------------------------------------
Create an Array
const hobbies = ['coding', 'scripting', 'learning']
console.log(hobbies)
--------------------------------------------------
Arrays
Create an Array
const hobbies = ['coding', 'scripting', 'learning']
console.log(hobbies)
--------------------------------------------------
Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
--------------------------------------------------
Update Elements 
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
--------------------------------------------------
Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'
console.log(condiments)
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments = ['Mayo']
console.log(condiments)
utensils[3] = 'Spoon'
console.log(utensils)
--------------------------------------------------
The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
--------------------------------------------------
The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('vacuum the floors', 'mow the lawns');
console.log(chores)
--------------------------------------------------
The .pop() Method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores)
--------------------------------------------------
More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
--------------------------------------------------
Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  return newArr.pop();
};
removeElement(concept);
console.log(concept);
--------------------------------------------------
Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
--------------------------------------------------
Loops
Repeating Tasks Manually
// Write your code below
const vacationSpots = ['Bafut', 'Bamenda', 'Brampton']
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])
--------------------------------------------------
The For Loop
// Write your code below
for (let cnt = 5; cnt <= 10; cnt++ ) {
  console.log(cnt);
};
for (let cnt = 5; cnt <= 10; cnt += 2 ) {
  console.log(cnt);
};
--------------------------------------------------
Looping in Reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
};
for (let counter = 10; counter >= 0; counter -= 2){
  console.log(counter);
};
--------------------------------------------------
Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`)
}
--------------------------------------------------
Nested Loops
// Write your code below
let bobsFollowers = ['Mary', 'John', 'Martin', 'Smith']
let tinasFollowers = ['Lilly', 'Martin', 'Smith']
let mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++ ) {
  for (let j = 0; j < tinasFollowers.length; j++ ) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
    }
  }
};
console.log(mutualFollowers)
--------------------------------------------------
The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard !== 'spade') {
 currentCard = cards[Math.floor(Math.random() * 4)]; 
 console.log(currentCard)
}
--------------------------------------------------
Do...While Statements
// Write your code below
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded)
--------------------------------------------------
The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
};
console.log("And if you don't know, now you know.");
--------------------------------------------------


// function
const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);
// code
let arr = range(5, 11, 1)
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
};
///////////////////////////////////////////////////////////////////////////////////

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}
///////////////////////////////////////////////////////////////////////////////////

// Write your code below
let bobsFollowers = ['Jane', 'Phylys-ann', 'Martin', 'Nforne']
let tinasFollowers = ['Phylys-ann', 'Martin',  'Lilly']
let mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
        mutualFollowers.push(bobsFollowers[i])
    };
  };
}
console.log(mutualFollowers)

///////////////////////////////////////////////////////////////////////////////////

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
};

///////////////////////////////////////////////////////////////////////////////////

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

//////////////////////////////////////////////////////////////////////////////////

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  };
  console.log(rapperArray[i]);
};
console.log("And if you don't know, now you know.");

//////////////////////////////////////////////////////////////////////////////////

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

//////////////////////////////////////////////////////////////////////////////////

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
// const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; is2p2();
const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

/*// higher order function : mine
const checkConsistentOutput = (funcPar, val) => {
  let r1 = funcPar(val);
  let r2 = funcPar(val);
  r1 === r2 ? r1 : 'This function returned inconsistent results';
};*/

// higher order function : yours
const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};
checkConsistentOutput(addTwo, 10)
console.log(checkConsistentOutput(addTwo, 10))

//////////////////////////////////////////////////////////////////////////////////

Iterators
---------------------------------------------------------------------------------
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

----------------------------------------------------------------------------
.forEach()
----------
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(element => 
  console.log(`I want to eat a ${element}`)
)

---------------------------------------------------------------------------

const string = 'word';

// Option 1
string.split('');

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd']
----------------------------------------------------------------------------
.map()
------------
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(element => {
  return element.split('')[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number/100;
});

--------------------------------------------------------------------------
.filter()
-----------
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(element => {
  return element < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(element => {
  if (element.split('').length > 7) {
    return element
  };
});

---------------------------------------------------------------------------
.findIndex()
--------------
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(element => {
return element === 'elephant';
});

const startsWithS = animals.findIndex(element => {
  return element[0] === 's' ? true : false;
});

let a = 'ab'
console.log(a.length)

--------------------------------------------------------------------------
.reduce()
-------------
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);
console.log(newSum);

-------------------------------------------------------------------------
.every()
---------------
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));

-------------------------------------------------------------------------

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

------------------------------------------------------------------------------

COMPASS PREPS

https://youtu.be/fGrCM90_xPM
