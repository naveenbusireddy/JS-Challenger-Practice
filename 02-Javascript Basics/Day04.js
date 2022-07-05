// Check whether a string contains another string and concatenate
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function stringContains(a, b) {
  let isContain = a.toLowerCase().includes(b.toLowerCase());
  if (isContain) {
    return b + a;
  } else {
    return a + b;
  }
  // return a.indexOf(b) === -1 ? a + b : b + a;
}

console.log(stringContains("cheese", "cake"));
console.log(stringContains("lips", "s"));
console.log(stringContains(" think, there I am", "I"));

////////////////////////////////////////////////

// How many times does a character occur?
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function characterCount(a, b) {
  return b.split(a).length - 1;
}
console.log(
  characterCount(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  characterCount(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  characterCount(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  characterCount(
    "z",
    "how many times does the character occur in this sentence?"
  )
);

/////////////////////////////////
// Get last n elements of an array
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function lastNChar(a) {
  return a.slice(-3);
}

////////////////////////////
// Return the percentage of a number
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function percentageOfNum(a, b) {
  return (b / 100) * a;
}
console.log(percentageOfNum(100, 50));
console.log(percentageOfNum(10, 1));
console.log(percentageOfNum(500, 25));

///////////////////////////////////
// Extract keys from Javascript object
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function keysOfObj(a) {
  return Object.keys(a);
}
console.log({ a: 1, b: 2, c: 3 });
console.log({ j: 9, i: 2, x: 3, z: 4 });
console.log({ w: 15, x: 22, y: 13 });

//////////////////////////////////
// Convert a Set to Array
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function convertSetToArray(set) {
  // return Array.from(set);
  // return [...set];
  let array = [];
  set.forEach((v) => array.push(v));
  return array;
}
console.log(convertSetToArray(new Set([1, 2, 3])));
console.log(convertSetToArray(new Set("123")));
console.log(convertSetToArray(new Set(["1", "2", "3"])));

////////////////////////////////////////
// Round a number to 2 decimal places
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function roundNum(a) {
  return a.toFixed(2);
}
console.log(roundNum(2.12397));
console.log(roundNum(3.136));
console.log(roundNum(1.12397));

///////////////////////////////////////////
// Check if a number is even
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function checkNumEvenOrNot(a) {
  return a % 2 === 0;
}
console.log(checkNumEvenOrNot(10));
console.log(checkNumEvenOrNot(-4));
console.log(checkNumEvenOrNot(5));
console.log(checkNumEvenOrNot(-111));

//////////////////////////////////////////////
// Find next higher natural number that is divisible by y
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function nextDivisibleNum(x, y) {
  /* while (x % y !== 0) {
    x++;
  }
  return x; */
  if(x%y === 0) {
    return x;
  }
  else {
    let num = x + (y-(x%y));
    return num;
  }
}
console.log(nextDivisibleNum(1, 23));
console.log(nextDivisibleNum(23, 23));
console.log(nextDivisibleNum(7, 3));
console.log(nextDivisibleNum(-5, 7));