//  Extract first half of string
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function extractFirstHalf(str) {
  let n = str.length / 2;
  return str.slice(0, n);
  // return str.slice(0, str.length / 2);
}
console.log(extractFirstHalf("abcdefgh"));
console.log(extractFirstHalf("1234"));
console.log(extractFirstHalf("gedcbe"));

//////////////////////////////////////////

//  Count number of negative values in array
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function numberOfNegativeValues(a) {
  let negativeArr = a.filter((item) => item < 0);
  return negativeArr.length;
  // return a.filter((el) => el < 0).length;
}

console.log(numberOfNegativeValues([1, -2, 2, -4]));
console.log(numberOfNegativeValues([0, 9, 1]));
console.log(numberOfNegativeValues([4, -3, 2, 1, 0]));

////////////////////////////////////////////
//  Remove first n elements of an array
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function removeFirstNElement(arr) {
  return arr.slice(3);
}

console.log(removeFirstNElement([1, 2, 3, 4]));
console.log(removeFirstNElement([5, 4, 3, 2, 1, 0]));
console.log(removeFirstNElement([99, 1, 1]));
///////////////////////////////////////////////////

//  The function accepts following parameters:
//  1. DOUBLE meal_cost
//  2. INTEGER tip_percent
//  3. INTEGER tax_percent

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100);
    let totalCost = Math.round(meal_cost + tip + tax);
    console.log(totalCost);
}

// function main() {
//     const meal_cost = parseFloat(readLine().trim());

//     const tip_percent = parseInt(readLine().trim(), 10);

//     const tax_percent = parseInt(readLine().trim(), 10);

//     solve(meal_cost, tip_percent, tax_percent);
// }

solve(12.00, 20, 8);