//  Extract first half of string
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function extractFirstHalf(str) {
    let n = (str.length / 2);
    return str.slice(0,n);
    // return str.slice(0, str.length / 2);
  }
  console.log(extractFirstHalf('abcdefgh'));
  console.log(extractFirstHalf('1234'));
  console.log(extractFirstHalf('gedcbe'));
  