// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function sumFunction(a, b) {
  return a + b;
}
console.log(sumFunction(1, 2));
console.log(sumFunction(1, 10));
console.log(sumFunction(99, 1));

/////////////////////////////////////////////
// Comparison operators, strict equality
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function comparisonOperator(a, b) {
  return a === b;
}
console.log(comparisonOperator(2, 3)); // false
console.log(comparisonOperator(3, 3)); // true
console.log(comparisonOperator(2, "2")); // false
console.log(comparisonOperator("10", "10")); // true

//////////////////////////////////////////////////
// Get type of value
// Write a function that takes a value as argument
// Return the type of the value

function typeofFunction(a) {
  return typeof a;
}
console.log(typeofFunction(1));
console.log(typeofFunction(false));
console.log(typeofFunction({}));
console.log(typeofFunction(null));
console.log(typeofFunction("string"));
console.log(typeofFunction(["new"]));

///////////////////////////////////////
// Get nth character of string
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function nPositionChar(str, n) {
  return str.charAt(n - 1);
  //   return str[n - 1];
}
console.log(nPositionChar("abcd", 1)); // 'a'
console.log(nPositionChar("zyxbwpl", 5)); // 'w'
console.log(nPositionChar("gfedcba", 3)); // 'e'

//////////////////////////////////////
//  Remove first n characters of string
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function removeFirstNChar(str) {
  return str.slice(3);
}
console.log(removeFirstNChar("abcdefg")); // defg
console.log(removeFirstNChar("1234")); // 4
console.log(removeFirstNChar("fgedcba")); // dcba

////////////////////////////////////////
//  Get last n characters of string
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function lastNCharOfStr(str) {
  return str.slice(-3);
}
console.log(lastNCharOfStr("abcdefg"));
console.log(lastNCharOfStr("1234"));
console.log(lastNCharOfStr("fgedcba"));

///////////////////////////////////////////
//  Creating Javascript objects one
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
function creatingObject(a) {
  let obj = { key: a };
  return obj;
  // return {key : a};
}
console.log(creatingObject("a"));
console.log(creatingObject("z"));
console.log(creatingObject("b"));

///////////////////////////////////
//  Get first n characters of string
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function firstNCharsOfStr(str) {
  return str.slice(0, 3);
}
console.log(firstNCharsOfStr("abcdefg"));
console.log(firstNCharsOfStr("1234"));
console.log(firstNCharsOfStr("fgedcba"));
