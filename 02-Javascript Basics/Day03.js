//  Accessing object properties three
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function accessingObj(obj, key) {
  return obj[key];
  // return obj.key  //it won't execute due to white spaces in properties, so need to use [] notation.
}
console.log(accessingObj({ continent: "Asia", country: "Japan" }, "continent"));
console.log(
  accessingObj({ country: "Sweden", continent: "Europe" }, "country")
);

////////////////////////////////////////////////////////////////
//  Get first n elements of an array
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function firstNEle(a) {
  return a.slice(0, 3);
}

console.log(firstNEle([1, 2, 3, 4]));
console.log(firstNEle([5, 4, 3, 2, 1, 0]));
console.log(firstNEle([99, 1, 1]));

////////////////////////////////////

//  Sort an array of strings alphabetically
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function arrSorting(arr) {
  return arr.sort();
}
console.log(arrSorting(["b", "c", "d", "a"]));
console.log(arrSorting(["z", "c", "d", "a", "y", "a", "w"]));

///////////////////////////////////////////

//  Multiplication, division, and comparison operators
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function comparisonOpr(a, b) {
  return a < b ? a / b : a * b;
}
console.log(comparisonOpr(10, 100));
console.log(comparisonOpr(90, 45));
console.log(comparisonOpr(8, 20));
console.log(comparisonOpr(2, 0.5));

///////////////////////////////////
//  Remove last n characters of string
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeLastNChar(a) {
  return a.slice(0, a.length - 3);
  // return a.slice(0, -3);
}
console.log(removeLastNChar("abcdefg"));
console.log(removeLastNChar("1234"));
console.log(removeLastNChar("fgedcba"));

/////////////////////////////////
//  Check if value is present in Set
// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set
function valuePresentInSet(set, val) {
  return set.has(val);
}
console.log(valuePresentInSet(new Set([1, 2, 3]), 2));
console.log(valuePresentInSet(new Set([123]), 2));
console.log(valuePresentInSet(new Set(['1', '2', '3']), '2'));
console.log(valuePresentInSet(new Set('123'), '2'));

